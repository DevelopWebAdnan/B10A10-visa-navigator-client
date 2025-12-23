import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateVisa = () => {

    const definiteVisa = useLoaderData();
    console.log('definiteVisa: ', definiteVisa);

    const { _id, image, name, selectedVisa, time, documents, description, age, fee, validity, applicationMethod } = definiteVisa;
    console.log(_id, image, name, selectedVisa, time, documents, description, age, fee, validity, applicationMethod);

    const handleUpdateVisa = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const name = e.target.name.value;
        const selectedVisa = e.target.selectedVisaType.value;
        const time = e.target.time.value;
        const vPassport = e.target.vPassport.checked;
        const vApplicationForm = e.target.vApplicationForm.checked;
        const rPsPhoto = e.target.rPsPhoto.checked;
        const documents = [vPassport, vApplicationForm, rPsPhoto];
        const description = e.target.description.value;
        const age = e.target.age.value;
        const fee = e.target.fee.value;
        const validity = e.target.validity.value;
        const applicationMethod = e.target.applicationMethod.value;
        // const myRadio = e.target.myRadio.value;

        const updatedVisa = { image, name, selectedVisa, time, documents, description, age, fee, validity, applicationMethod };

        console.log(updatedVisa);
        // console.log('image:', image, 'name:', name, 'selectedVisa:', selectedVisa, 'time:', time, 'visaPassport:', vPassport, 'vApplicationForm:', vApplicationForm, 'recentPsPhoto:', rPsPhoto, 'documents:', documents, 'description:', description, 'age:', age, 'fee:', fee, 'validity:', validity, 'applicationMethod:', applicationMethod);

        fetch(`http://localhost:5000/allVisas/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedVisa)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Visa has been updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        // <div></div>
        <dialog id="my_update_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                {/* <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p> */}
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-2xl font-bold">Update Visa {definiteVisa.name}</h1>
                        </div>
                        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleUpdateVisa} className="fieldset">
                                    <label className="label">Country image</label>
                                    <input type="text" name="image" defaultValue={image} className="input mb-4" placeholder="Country image" />
                                    <label className="label">Country name</label>
                                    <input type="text" name="name" defaultValue={name} className="input mb-4" placeholder="Country name" />

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
                                        {/* <input type="text" className="input" placeholder="Type here" /> */}
                                        <input type="time" name="time" className="input" />
                                        {/* <p className="label">Processing_time</p> */}
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
                                        {/* <div className="label">Description</div> */}
                                    </fieldset>

                                    <input
                                        type="number"
                                        name="age"
                                        className="input"
                                        required
                                        placeholder="Age_restriction (between 21 to 51)"
                                        min="21"
                                        max="51"
                                        title="Must be between be 21 to 51"
                                    />

                                    <input
                                        type="number"
                                        name="fee"
                                        className="input my-4"
                                        required
                                        placeholder="Fee (in taka)"
                                        min="1"
                                        max="1000000"
                                        title="Must be between be 1 to 1000000"
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

                                    {/* <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                <legend className="fieldset-legend">Application_method:</legend>
                                <label className="label">
                                    <input type="radio" name="myRadio" value="option1" className="radio" /> Option 1
                                    </label>
                                <label className="label">
                                    <input type="radio" name="myRadio" value="option2" className="radio" defaultChecked={true} /> Option 2
                                    </label>
                                <label><input type="radio" name="myRadio" value="option3" />Option 3</label>
                            </fieldset> */}

                                    {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                    <button type="submit" className="btn btn-neutral mt-4">Update Visa</button>
                                    {/* <button className="btn btn-active btn-accent">Accent</button> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
                {/* <button type="submit" className="btn btn-neutral mt-4">Update Visa</button> */}
                {/* <button className="btn btn-active btn-accent">Accent</button> */}
                </form>
                    </div>
            </div>
        </dialog>
    );
};

export default UpdateVisa;