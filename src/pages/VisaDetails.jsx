import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const VisaDetails = () => {

    const { user } = useContext(AuthContext);

    const visaDetails = useLoaderData();
    // console.log('visaDetails: ', visaDetails);

    const { _id, image, countryName, selectedVisa, time, sentence, description, age, fee, validity, applicationMethod } = visaDetails;

    const handleApply = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const date = e.target.date.value;
        const fee = e.target.fee.value;

        const newApplication = { countryName, image, selectedVisa, time, fee, validity, applicationMethod, date, fname, lname, email };

        // console.log('newApplication: ', newApplication);

        fetch("https://b10-a10-visa-navigator-server-ten.vercel.app/visaApplications", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newApplication)
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result)

                if (result.insertedId) {

                    Swal.fire({
                        title: 'Success!',
                        text: 'Your application has been created',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    const loggedInUserName = user.displayName;

    const splittedUser = loggedInUserName.split(' ');

    const splittedUserFirst = splittedUser[0];
    // console.log('splittedUserFirst: ', splittedUserFirst);
    const splittedUserLast = splittedUser[1];
    // console.log('splittedUserLast: ', splittedUserLast);

    return (
        <div>
            <title>VisaDetails {_id}</title>
            <div>
                <div
                    className="hero min-h-screen mb-5"
                    style={{
                        backgroundImage:
                            `url(${image})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h3 className="font-bold text-lg">Country name: {countryName}</h3>
                            <h3 className="text-lg py-4">Processing time: {time}</h3>
                            <h3 className="font-bold">Visa-type: {selectedVisa}</h3>
                            <p className="py-4">Applied date (current date): {new Date().toDateString()}</p>
                            <p className="py-4">Fee (visa fee): {fee}</p>
                            <p className="py-4">Validity: {validity}</p>
                            <p className="py-4">Your description: {description}</p>
                            <p className="py-4">Age_restriction: {age}</p>
                            <p className="py-4">Required_documents: {sentence}</p>
                            <p className="py-4">Application_method: {applicationMethod}</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl text-base-100 bg-[#00CC99] my-6" onClick={() => document.getElementById('myDetailsModal').showModal()}>Apply for the visa</button>
                </div>

                <dialog id="myDetailsModal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">

                        <div className="hero bg-base-200 min-h-screen">
                            <div className="hero-content flex-col">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-2xl font-bold">Apply for the Visa!</h1>
                                </div>
                                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                                    <div className="card-body">
                                        <form onSubmit={handleApply} className="fieldset">

                                            <label className="label">Email</label>
                                            <input type="email" name="email" defaultValue={user?.email} className="input" placeholder="Email" />

                                            <label className="label">First Name</label>
                                            <input type="text" name="fname" defaultValue={splittedUserFirst} className="input" placeholder="First Name" />
                                            <label className="label">Last Name</label>
                                            <input type="text" name="lname" defaultValue={splittedUserLast} className="input" placeholder="Last Name" />

                                            <label className="label">Applied date (current date)</label>
                                            <input type="date" name="date" defaultValue={new Date().toDateString()} className="input" />

                                            <label className="label">Fee (visa fee)</label>
                                            <input
                                                type="number"
                                                name="fee"
                                                defaultValue={fee}
                                                className="input validator"
                                                required
                                                placeholder="Fee (visa fee)"
                                                min="100"
                                                max="1000000"
                                                title="Must be between 100 to 1000000"
                                            />
                                            <p className="validator-hint">Must be between 100 to 1000000</p>

                                            <button type="submit" className="btn btn-neutral mt-4">Apply</button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn text-base-100 bg-[#00CC99]">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default VisaDetails;