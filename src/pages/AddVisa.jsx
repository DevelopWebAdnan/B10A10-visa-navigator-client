import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
// import { TiTick} from "react-icons/ti";
// import { ImCross } from "react-icons/im";

const AddVisa = () => {

    const {user} = useContext(AuthContext);

    console.log(user?.email);

    const handleAddVisa = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const countryName = e.target.countryName.value;
        const selectedVisa = e.target.selectedVisaType.value;
        const time = e.target.time.value;
        const vPassport = e.target.vPassport.checked;
        const vApplicationForm = e.target.vApplicationForm.checked;
        const rPsPhoto = e.target.rPsPhoto.checked;
        // const documents = [vPassport, vApplicationForm, rPsPhoto];
        const documentsAvailability = [
            { "Valid passport": vPassport },
            { "Valid application form": vApplicationForm },
            { "Recent passport-sized photo": rPsPhoto }
        ]
        // };
        // const requiredDocuments = 
        // <ul>
        //     {
        //         documents.map(document => {
        //            if(!document) {
        //                <li className='text-red-500'>{document}</li>
        //            }
        //            else {
        //                document
        //            }
        //        })
        //     }
        // </ul>
        // let sentence = "";
        let sentence = [];
        for (const requiredDocument of documentsAvailability) {
            console.log(requiredDocument);
            for (const key in requiredDocument) {
                console.log(key);
                // const keys = Object.keys(requiredDocument)
                // console.log(keys);
                if (requiredDocument[key]) {
                    console.log(key + ' is available. ');
                    // sentence = key + ' is available';
                    sentence.push(key + ': available. ');
                }
                else {
                    console.log(key + ' is not available. ');
                    // sentence = key + ' is not available';
                    sentence.push(key + ': missing?! ');
                }
                // console.log('sentence: ', sentence);


                // <h3 className="text-2xl font-thin">Nutrition: </h3>
                // let sentence2 = [];
                // <ul className="text-xl ml-12">
                //     {
                //         requiredDocument[key] && sentence2.push(
                //             <li className="list-disc">
                //                 {key} : (is available)
                //             </li>
                //         )
                //     }
                // </ul>
                // console.log('sentence2: ', sentence2);

                // let sentence2 = [];
                // {requiredDocument[key] && sentence2.push(key + ' is available. ') : sentence2.push(key + ' is not available. ')};
                // console.log('sentence2: ', sentence2);
            }
            // for (const value in requiredDocument) {
            //     console.log(value);
            // }
        }
        console.log('So, sentence: ', sentence);


        // let sentence3 = [];
        // const documentsList = (documentsAvailability) => {
            // let sentence4 = [];
            // let sentence2;
            // <ul>
                // {
                //     documentsAvailability.map(requiredDocument => {
                //         console.log(requiredDocument)
                //         for (const key in requiredDocument) {
                //             console.log(key);

                //             // let sentence3 = [] 
                //             // const sentence3 = []
                //             requiredDocument[key] ?
                //                 // {
                //                 // <li
                //                 // key={requiredDocument.id}
                //                 // className='text-green-800'
                //                 // >
                //                 sentence3.push(key + '<TiTick></TiTick>')
                //                 // </li>
                //                 // }
                //                 // )
                //                 :
                //                 // (
                //                 // <li
                //                 //     className='text-red-700'
                //                 // >
                //                 sentence3.push(<ImCross></ImCross> + key)
                //             // </li>
                //             // )
                //             // console.log('sentence3: ', sentence3);


                //             // if (requiredDocument[key]) {
                //             //     sentence4.push(<li className='text-green-600'>{requiredDocument[key] + ' is available. '}</li>)
                //             // }
                //             // else {
                //             //     sentence4.push(<li className='text-red-500'>{requiredDocument[key] + ' is not available. '}</li>)
                //             // }

                //             // console.log('sentence4: ', sentence4);
                //             // return <ul>{sentence4}</ul>
                //         }
                //     })
                // }
            // </ul>
        // }
        
        // documentsList(documentsAvailability)
        // console.log('So, sentence3 is chosen: ', sentence3);

        // const requiredDocumentsFound = requiredDocuments.map((requiredDocument) => ({
        //     ...requiredDocument
        // }));

        //     function RequiredDocument({document}) {
        //     const name = document ? document :
        //     <span style={{color: "red"}}>
        //         {document}
        //     </span>

        //     return (
        //         {name}
        // );
        // }

        // const rows = [];

        // requiredDocumentsAvailability.forEach(requiredDocument => {
        //     console.log(requiredDocument);
        // if (isAvailable && !document) {
        //     return;
        // }
        // rows.push(
        //     RequiredDocument(document)
        //     document={document}
        //     key={document}
        //     ></RequiredDocument>
        // );
        // });

        const description = e.target.description.value;
        const age = e.target.age.value;
        const fee = e.target.fee.value;
        const validity = e.target.validity.value;
        const applicationMethod = e.target.applicationMethod.value;
        // const myRadio = e.target.myRadio.value;

        const email = user?.email;

        const newVisa = { image, countryName, selectedVisa, time, vPassport, vApplicationForm, rPsPhoto, sentence, description, age, fee, validity, applicationMethod, email };

        console.log(newVisa);
        // console.log('image:', image, 'countryName:', countryName, 'selectedVisa:', selectedVisa, 'time:', time, 'visaPassport:', vPassport, 'vApplicationForm:', vApplicationForm, 'recentPsPhoto:', rPsPhoto, 'documents:', documents, 'description:', description, 'age:', age, 'fee:', fee, 'validity:', validity, 'applicationMethod:', applicationMethod);

        // fetch('http://localhost:5000/addedVisas', {
        fetch('http://localhost:5000/visas', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newVisa)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Add Visa now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleAddVisa} className="fieldset">
                            <label className="label">Country image</label>
                            <input type="text" name="image" className="input mb-4" placeholder="Country image" />
                            <label className="label">Country name</label>
                            <input type="text" name="countryName" className="input mb-4" placeholder="Country name" />

                            {/* <details className="dropdown">
                                <summary className="btn m-1">open or close</summary>
                                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </details> */}

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
                                placeholder="Age_restriction (between 21 to 71)"
                                min="21"
                                max="71"
                                title="Must be between 21 to 71"
                            />
                            {/* <p className="validator-hint">Must be between be 21 to 51</p> */}

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
                            {/* <p className="validator-hint">Must be between be 1 to 1000000</p> */}

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

                            {/* <label className="label">
                                    <input type="radio" name="myRadio" value="option2" className="radio" defaultChecked={true} /> Option 2
                                    </label>
                                <label><input type="radio" name="myRadio" value="option3" />Option 3</label>
                            </fieldset> */}

                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                            <button type="submit" className="btn btn-neutral mt-4">Add Visa</button>
                            {/* <button className="btn btn-active btn-accent">Accent</button> */}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVisa;