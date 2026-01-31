import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const VisaDetails = () => {

    // const [errorMessage, setErrorMessage] = useState("");

    const { user } = useContext(AuthContext);

    // const navigate = useNavigate();

    const visaDetails = useLoaderData();
    console.log('visaDetails: ', visaDetails);

    const { _id, image, countryName, selectedVisa, time, sentence, description, age, fee, validity, applicationMethod } = visaDetails;

    // const modalRef = useRef(null);

    const handleApply = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const date = e.target.date.value;
        const fee = e.target.fee.value;

        const newApplication = { countryName, image, selectedVisa, time, fee, validity, applicationMethod, date, fname, lname, email };

        console.log('newApplication: ', newApplication);

        // Navigate to the home page?!!
        // navigate('/');

        // reset error and status
        // setErrorMessage("");

        // fetch("http://localhost:5000/addedVisas", {
        fetch("http://localhost:5000/visaApplications", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newApplication)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)

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

    return (
        <div>

            <div>
                <h2 className='font-black'>Visa Details of id: {_id}</h2>

                Country image
                Country name
                What is the processing time?
                Visa_type
                Applied date (current date)
                Validity
                Your description
                Age_restriction
                Required_documents
                Application_method
                <h3 className=" text-lg"><span className="font-bold">Email:</span> {user?.email}</h3>

                <h3 className="font-bold text-lg">First Name: {user?.displayName}</h3>
                <h3 className="font-bold text-lg">Last Name! </h3>


                {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        visas.map(visa => <VisaCard
                            key={visa._id}
                            visa={visa}
                        // isAvailable={isAvailable}         
                        ></VisaCard>)
                    }
                </div> */}

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
                            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
                            <h3 className="font-bold text-lg">Country name: {countryName}</h3>
                            <h3 className="text-lg py-4">Processing time: {time}</h3>
                            <h3 className="font-bold">Visa-type: {selectedVisa}</h3>
                            {/* <p className="py-4">Applied date (current date): {user?.metadata?.creationTime}</p> */}
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
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl my-6" onClick={() => document.getElementById('myDetailsModal').showModal()}>Apply for the visa</button>
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

                                            {/* <h3 className="font-bold text-lg">Email!</h3> */}
                                            <label className="label">Email</label>
                                            <input type="email" name="email" defaultValue={user?.email} className="input" placeholder="Email" />
                                            {/* <h3 className="font-bold text-lg">First Name!</h3>
                                        <h3 className="font-bold text-lg">Last Name!</h3> */}
                                            <label className="label">First Name</label>
                                            <input type="text" name="fname" defaultValue={user?.displayName} className="input" placeholder="First Name" />
                                            <label className="label">Last Name</label>
                                            <input type="text" name="lname" defaultValue={user?.displayName} className="input" placeholder="Last Name" />
                                            {/* <div className="ps-4">
                                    <a className="text-lg font-bold">daisyUI</a>
                                </div> */}
                                            {/* <div className="flex grow justify-end px-2"> */}
                                            {/* <div className="flex items-stretch"> */}
                                            {/* <a className="btn btn-ghost rounded-field">Button</a> */}
                                            {/* <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="btn btn-ghost rounded-field">Visa_type</div>
                                            <ul
                                                tabIndex="-1"
                                                className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                                                <li><a>Tourist visa</a></li>
                                                <li><a>Student visa</a></li>
                                                <li><a>Office visa</a></li>
                                            </ul>
                                        </div> */}
                                            {/* </div> */}
                                            {/* </div> */}

                                            {/* <p className="py-4">Applied date (current date)</p> */}
                                            <label className="label">Applied date (current date)</label>
                                            <input type="date" name="date" defaultValue={new Date().toDateString()} className="input" />

                                            {/* <input type="time" className="input" />
                                        <fieldset className="fieldset">
                                            <legend className="fieldset-legend">What is the processing time?</legend> */}
                                            {/* <input type="text" className="input" placeholder="Type here" /> */}
                                            {/* <input type="time" className="input" /> */}
                                            {/* <p className="label">Processing_time</p> */}
                                            {/* </fieldset> */}

                                            {/* <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                            <legend className="fieldset-legend">Required_documents</legend>
                                            <label className="label">
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                                Valid passport
                                            </label>
                                            <label className="label">
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                                Visa application form
                                            </label>
                                            <label className="label">
                                                <input type="checkbox" defaultChecked className="checkbox" />
                                                Recent passport-sized photograph
                                            </label>
                                        </fieldset> */}

                                            {/* <fieldset className="fieldset">
                                            <legend className="fieldset-legend">Your description</legend>
                                            <textarea className="textarea h-24" placeholder="Description"></textarea> */}
                                            {/* <div className="label">Description</div> */}
                                            {/* </fieldset> */}

                                            {/* <input
                                            type="number"
                                            className="input validator"
                                            required
                                            placeholder="Age_restriction (between 21 to 51)"
                                            min="21"
                                            max="51"
                                            title="Must be between be 21 to 51"
                                        />
                                        <p className="validator-hint">Must be between be 21 to 51</p> */}

                                            {/* <p className="py-4">Fee (visa fee)</p> */}
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

                                            {/* <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                            <legend className="fieldset-legend">Validity</legend>
                                            <label className='label'>
                                                <input
                                                    type="radio" name="radio-12" defaultChecked
                                                    className="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600" /> Invalid
                                            </label>
                                            <label className='label'>
                                                <input
                                                    type="radio" name="radio-12" defaultChecked
                                                    className="radio bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600" /> Valid
                                            </label>
                                        </fieldset> */}

                                            {/* <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                            <legend className="fieldset-legend">Application_method</legend>
                                            <label className='label'>
                                                <input type="radio" name="radio-7" className="radio radio-success" defaultChecked /> Online
                                            </label>
                                            <label className='label'>
                                                <input type="radio" name="radio-7" className="radio radio-success" /> Offline
                                            </label>
                                        </fieldset> */}

                                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                            <button type="submit" className="btn btn-neutral mt-4">Apply</button>
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
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default VisaDetails;