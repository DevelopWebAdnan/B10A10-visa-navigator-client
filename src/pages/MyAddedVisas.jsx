import { data, Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedVisas = () => {

    const visas = useLoaderData();
    console.log(visas);

    const { _id, image, name, selectedVisa, time, documents, description, age, fee, validity, applicationMethod } = visas;

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
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h2 className='font-black text-5xl text-teal-500 text-center'>My Added Visas: {visas.length}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    visas.map(visa => <div
                        className="card bg-base-100 h-96 shadow-sm"
                        key={visa._id}
                    >
                        <figure className="h-1/2">
                            <img className="h-full w-full"
                                src={visa.image}
                                alt="country image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {visa.name}
                                <div className="badge badge-secondary">{visa.selectedVisa}</div>
                            </h2>
                            <p>Time: {visa.time}</p>
                            <p>Documents: {visa.documents}</p>
                            <p>Description: {visa.description}</p>
                            <p>Age: {visa.age}</p>
                            <div className="card-actions justify-end">
                                <Link to={`updateVisa/${_id}`}>
                                    <button className="btn btn-outline">Update</button>
                                </Link>

                                <button onClick={() => handleDelete(visa._id)} className="btn btn-outline">Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            {/* <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="country image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Card Title
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <div className="btn btn-outline">Update</div>
                        <button onClick={() => handleDelete(_id)} className="btn btn-outline">Delete</button>
                    </div>
                </div>
            </div> */}
            {/* <VisaCard></VisaCard> */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyAddedVisas;