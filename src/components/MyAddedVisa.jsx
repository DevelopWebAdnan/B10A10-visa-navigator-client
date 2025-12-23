
import Swal from 'sweetalert2';
import { useRef } from "react";

const MyAddedVisa = ({ visa, visas, setVisas }) => {

    const { _id, image, name, selectedVisa, time, sentence, description, age, fee, validity, applicationMethod } = visa;
    console.log(_id, image, name, selectedVisa, time, sentence, description, age, fee, validity, applicationMethod);

    const modalRef = useRef(null);

    const handleShowModalClick = () => {
        // console.log(id);
        if (modalRef.current) {
            modalRef.current.showModal();

            // document.getElementById('my_update_modal').showModal();
        } else {
            console.warn('Modal reference is not available.');
        }
    };

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

        // const documents = [
        //     {'Valid passport': vPassport},
        //      {'Valid Application Form': vApplicationForm}, 
        //     {'Recent passport-sized photograph': rPsPhoto}
        // ];
        // const requiredDocuments = for(const document of documents) {

        // }
        // <ul>
        const requiredDocuments = sentence.map(document => {
            //    if(!document) {
            <li className='text-red-500'>{document}</li>
            //    }
            //    else {
            //    <li>{document}</li>
            //    }
        })
        // </ul>
        const description = e.target.description.value;
        const age = e.target.age.value;
        const fee = e.target.fee.value;
        const validity = e.target.validity.value;
        const applicationMethod = e.target.applicationMethod.value;
        // const myRadio = e.target.myRadio.value;

        const updatedVisa = { image, name, selectedVisa, time, documents, description, age, fee, validity, applicationMethod };

        console.log(updatedVisa);
        console.log('_id: ', _id, 'image:', image, 'name:', name, 'selectedVisa:', selectedVisa, 'time:', time, 'visaPassport:', vPassport, 'vApplicationForm:', vApplicationForm, 'recentPsPhoto:', rPsPhoto, 'documents:', documents, 'requiredDocuments: ', requiredDocuments, 'description:', description, 'age:', age, 'fee:', fee, 'validity:', validity, 'applicationMethod:', applicationMethod);

        // Send data to the server
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
                    // const updatedVisaCards = visas.map(updatedVisaCard => updatedVisaCard._id == updatedVisa._id);
                    // console.log(updatedVisaCards);
                    console.log('visa: ', visa, 'visa._id: ', visa._id, 'updatedVisa:', updatedVisa, 'updateVisa._id: ', updatedVisa._id, 'visas: ', visas);
                    if (visa._id == updatedVisa._id) {
                        console.log('visa: ', visa, 'updateVisa: ', updatedVisa, 'visa._id: ', visa._id, 'updateVisa._id: ', updatedVisa._id);
                    }
                    // const updatedVisaId = visas.find(visa => visa._id == updatedVisa._id);
                    // console.log(updatedVisaId);
                    const updatedVisas = visas.filter(vis => vis._id === _id);
                    console.log(updatedVisas);
                    // setVisas(updatedVisa);
                }
            })
    }

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/allVisas/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Visa has been deleted.",
                                icon: "success"
                            });

                            const remaining = visas.filter(vis => vis._id !== _id);
                            setVisas(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div
            className="card bg-base-100 h-96 shadow-sm"
        >
            <figure className="h-1/2">
                <img className="h-full w-full"
                    src={image}
                    alt="country image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{selectedVisa}</div>
                </h2>
                <p>Time: {time}</p>
                {/* <p>Documents: {sentence}</p> */}
                <ol>Documents:
                    {

                        // sentence.forEach(document => {
                            //    if(!document) {
                            <li className='text-red-500'>{sentence}</li>
                            //    }
                            //    else {
                            //    <li>{document}</li>
                            //    }
                        // })
                    }
                </ol>
                <p>Description: {description}</p>
                <p>Age: {age}</p>
                <div className="card-actions justify-end">
                    {/* <Link to={`updateVisa/${_id}`}> */}
                    {/* <Link to={`myAddedVisa/${_id}`}> */}
                    {/* <button className="btn btn-outline">Update</button> */}

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    {/* <button className="btn" onClick={() => document.getElementById('my_update_modal').showModal()}>Update</button> */}
                    <button className="btn" onClick={handleShowModalClick}>Update</button>
                    {/* </Link> */}
                    {/* <UpdateVisa></UpdateVisa> */}
                    {/* <dialog id="my_update_modal" className="modal modal-bottom sm:modal-middle"> */}
                    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="hero bg-base-200 min-h-screen">
                                <div className="hero-content flex-col">
                                    <div className="text-center lg:text-left">
                                        <h1 className="text-2xl font-bold">Update Visa: {name}</h1>
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
                                                <select name="selectedVisaType" defaultValue={selectedVisa}>
                                                    <option value="tourist visa">Tourist visa</option>
                                                    <option value="student visa">Student visa</option>
                                                    <option value="office visa">Office visa</option>
                                                </select>

                                                <fieldset className="fieldset my-4">
                                                    <legend className="fieldset-legend">What is the processing time?</legend>

                                                    <input type="time" name="time" defaultValue={time} className="input" />

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
                                                    <textarea name="description" defaultValue={description} className="textarea h-24" placeholder="Description"></textarea>

                                                </fieldset>

                                                <input
                                                    type="number"
                                                    name="age"
                                                    defaultValue={age}
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
                                                    defaultValue={fee}
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

                    <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">Delete</button>
                </div>
            </div>
            {/* <UpdateVisa></UpdateVisa> */}
        </div>
    );
};

export default MyAddedVisa;