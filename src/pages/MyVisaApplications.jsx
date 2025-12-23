import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyVisaApplications = () => {

    const {user} = useContext(AuthContext);

    return (
        
        <div>
            <h3 className="font-bold text-lg">Email: {user?.email}</h3>

                <h3 className="font-bold text-lg">First Name! {user?.displayName}</h3>
                <h3 className="font-bold text-lg">Last Name! {user?.displayName}</h3>
                <p className="py-4">Applied date (current date): {user?.metadata?.creationTime}</p>
                            <p className="py-4">Fee (visa fee): {}</p>
            <h2 className='font-black'>My Visa Applications</h2>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplications;