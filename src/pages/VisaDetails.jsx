import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";

const VisaDetails = () => {

    const visas = useLoaderData();
    console.log(visas);

    const handleApply = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const date = e.target.date.value;
        const fee = e.target.fee.value;

        console.log('Apply', email, fname, lname, date, fee);
    }

    return (
        <div>
            <h2 className='font-black'>Visa Details</h2>

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
            <h3 className="font-bold text-lg">Email!</h3>
            <h3 className="font-bold text-lg">Country image!</h3>
            <h3 className="font-bold text-lg">Country name!</h3>
            <h3 className="font-bold text-lg">Processing_time!</h3>
            <h3 className="font-bold text-lg">First Name!</h3>
            <h3 className="font-bold text-lg">Last Name!</h3>
            <h3 className="font-bold text-lg">Visa_type!</h3>
            <p className="py-4">Applied date (current date)</p>
            <p className="py-4">Fee (visa fee)</p>
            <p className="py-4"> (Validity)</p>
            <p className="py-4"> (Your description)</p>
            <p className="py-4"> (Age_restriction)</p>
            <p className="py-4"> (Required_documents)</p>
            <p className="py-4"> (Application_method)</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    visas.map(visa => <VisaCard
                        key={visa._id}
                        visa={visa}
                    // isAvailable={isAvailable}         
                    ></VisaCard>)
                }
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div className="hero bg-base-200 min-h-screen">
                        <div className="hero-content flex-col">
                            <div className="text-center lg:text-left">
                                <h1 className="text-2xl font-bold">Visa Details!</h1>
                            </div>
                            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                                <div className="card-body">
                                    <form onSubmit={handleApply} className="fieldset">

                                        <h3 className="font-bold text-lg">Email!</h3>
                                        <label className="label">Email</label>
                                        <input type="email" name="email" className="input" placeholder="Email" />
                                        <h3 className="font-bold text-lg">First Name!</h3>
                                        <h3 className="font-bold text-lg">Last Name!</h3>
                                        <label className="label">First Name</label>
                                        <input type="text" name="fname" className="input" placeholder="First Name" />
                                        <label className="label">Last Name</label>
                                        <input type="text" name="lname" className="input" placeholder="Last Name" />
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

                                        <p className="py-4">Applied date (current date)</p>
                                        <input type="date" name="date" className="input" />

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

                                        <p className="py-4">Fee (visa fee)</p>
                                        <input
                                            type="number"
                                            name="fee"
                                            className="input validator"
                                            required
                                            placeholder="Fee (visa fee)"
                                            min="1"
                                            max="1000000"
                                            title="Must be between be 1 to 1000000"
                                        />
                                        <p className="validator-hint">Must be between be 1 to 1000000</p>

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
                                        <button className="btn btn-neutral mt-4">Apply</button>
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
    );
};

export default VisaDetails;