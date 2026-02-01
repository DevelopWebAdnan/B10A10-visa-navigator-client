import { useLoaderData, useParams } from "react-router-dom";
import MyAddedVisa from "../components/MyAddedVisa";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyAddedVisas = () => {
    
    const myLoadedVisas = useLoaderData();

    const {email} = useParams();
        // console.log('email from useParams(): ', email);
    
        
        const [myVisas, setMyVisas] = useState(myLoadedVisas);
        
        const {user} = useContext(AuthContext);

    console.log('myLoadedVisas: ', myLoadedVisas, 'email from useParams(): ', email, 'user?.email: ', user?.email, 'myVisas: ', myVisas);

            // <dialog id="my_update_modal" className="modal modal-bottom sm:modal-middle">
            //  <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            //     <div className="modal-box">
            //          <h3 className="font-bold text-lg">Hello!</h3>
            //         <p className="py-4">Press ESC key or click the button below to close</p>
            // <div className="hero bg-base-200 min-h-screen">
            //             <div className="hero-content flex-col">
            //                 <div className="text-center lg:text-left">
            //                     <h1 className="text-2xl font-bold">Update Visa {name}</h1>
            //                 </div>
            //                 <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            //                     <div className="card-body">
            //                         <form onSubmit={handleUpdateVisa} method="dialog" className="fieldset">


    return (
        <div>
            <h3 className="font-bold text-lg">Email from useParams! {email}</h3>
            <h3 className="font-bold text-lg">Logged in users Email! {user?.email}</h3>
            <h3 className="font-bold text-lg">Logged in users First Name! {user?.displayName}</h3>
            <h3 className="font-bold text-lg">Logged in users Last Name! {user?.displayName}</h3>

            {/* { email === user?.email ? <> */}
            {email === user?.email && <>

                {/* </> : ""} */}
                {/* <h2 className='font-black'>My total Visa Applications: {visaApplications?.length}</h2> */}
                {/* <h2 className='font-black'>My total Visa Applications: {myApplications?.length}</h2> */}
            <h2 className='font-black text-5xl text-teal-500 text-center'>My ({email}) Added Visas: {myVisas.length}</h2>
            <h2 className='font-black text-5xl text-teal-500 text-center'>My ({user?.email}) Added Visas: {myVisas.length}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    myVisas.map(myVisa => <MyAddedVisa
                        key={myVisa._id} 
                        myVisa={myVisa}
                        myVisas={myVisas}
                        setMyVisas={setMyVisas}
                        ></MyAddedVisa>)
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

            {/* <UpdateVisa></UpdateVisa> */}
            
            {/* <Outlet></Outlet> */}

            </>
            }
        </div>
    );
};

export default MyAddedVisas;