import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';

const AddVisa = () => {

    const { user } = useContext(AuthContext);

    // console.log('user?.email: ', user?.email);

    const handleAddVisa = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const countryName = e.target.countryName.value;
        const selectedVisa = e.target.selectedVisaType.value;
        const time = e.target.time.value;
        const vPassport = e.target.vPassport.checked;
        const vApplicationForm = e.target.vApplicationForm.checked;
        const rPsPhoto = e.target.rPsPhoto.checked;
        const documentsAvailability = [
            { "Valid passport": vPassport },
            { "Valid application form": vApplicationForm },
            { "Recent passport-sized photo": rPsPhoto }
        ]
        let sentence = [];
        for (const requiredDocument of documentsAvailability) {
            // console.log(requiredDocument);
            for (const key in requiredDocument) {
                // console.log(key);
                if (requiredDocument[key]) {
                    // console.log(key + ' is available. ');
                    sentence.push(key + ': available. ');
                }
                else {
                    // console.log(key + ' is not available. ');
                    sentence.push(key + ': missing?! ');
                }
            }
        }
        // console.log('So, sentence: ', sentence);    

        const description = e.target.description.value;
        const age = e.target.age.value;
        const fee = e.target.fee.value;
        const validity = e.target.validity.value;
        const applicationMethod = e.target.applicationMethod.value;

        const email = user?.email;

        const newVisa = { image, countryName, selectedVisa, time, vPassport, vApplicationForm, rPsPhoto, sentence, description, age, fee, validity, applicationMethod, email };

        // console.log(newVisa);
        fetch('https://b10-a10-visa-navigator-server-ten.vercel.app/visas', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newVisa)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Visa has been added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <title>AddVisa | Visa Navigator</title>
            <div className="hero bg-card-229830 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl font-bold text-amber-200">Add Visa now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleAddVisa} className="fieldset">
                                <label className="label">Country image</label>
                                <input type="text" name="image" className="input mb-4" placeholder="Country image" />
                                <label className="label">Country name</label>
                                <input type="text" name="countryName" className="input mb-4" placeholder="Country name" />

                                <label className="label">
                                    Pick your visa-type:
                                </label>
                                <select name="selectedVisaType" defaultValue="tourist visa">
                                    <option value="tourist visa">Tourist visa</option>
                                    <option value="student visa">Student visa</option>
                                    <option value="office visa">Office visa</option>
                                </select>

                                <fieldset className="fieldset my-4">
                                    <legend className="fieldset-legend">What is the processing time?</legend>
                                    <input type="time" name="time" className="input" />
                                </fieldset>

                                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                    <legend className="fieldset-legend">Required_documents</legend>
                                    <label className="label">
                                        <input type="checkbox" name="vPassport" className="checkbox" />
                                        Valid passport
                                    </label>
                                    <label className="label">
                                        <input type="checkbox" name="vApplicationForm" className="checkbox" />
                                        Visa application form
                                    </label>
                                    <label className="label">
                                        <input type="checkbox" name="rPsPhoto" className="checkbox" />
                                        Recent passport-sized photograph
                                    </label>
                                </fieldset>

                                <fieldset className="fieldset my-4">
                                    <legend className="fieldset-legend">Your description</legend>
                                    <textarea name="description" className="textarea h-24" placeholder="Description"></textarea>
                                </fieldset>

                                <input
                                    type="number"
                                    name="age"
                                    className="input"
                                    required
                                    placeholder="Age_restriction (between 21 to 71)"
                                    min="21"
                                    max="71"
                                    title="Must be between 21 to 71"
                                />

                                <input
                                    type="number"
                                    name="fee"
                                    className="input my-4"
                                    required
                                    placeholder="Fee (in taka)"
                                    min="100"
                                    max="1000000"
                                    title="Must be between be 100 to 1000000"
                                />

                                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                    <legend className="fieldset-legend">Validity</legend>
                                    <label className='label'>
                                        <input
                                            type="radio" name="validity" value="invalid"
                                            className="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" /> Invalid
                                    </label>
                                    <label className='label'>
                                        <input
                                            type="radio" name="validity" value="valid"
                                            className="radio radio-success" defaultChecked /> Valid
                                    </label>
                                </fieldset>

                                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                    <legend className="fieldset-legend">Application_method</legend>
                                    <label className='label'>
                                        <input type="radio" name="applicationMethod" value="online" className="radio" defaultChecked /> Online
                                    </label>
                                    <label className='label'>
                                        <input type="radio" name="applicationMethod" value="offline" className="radio" /> Offline
                                    </label>
                                </fieldset>

                                <button type="submit" className="btn btn-neutral mt-4">Add Visa</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVisa;