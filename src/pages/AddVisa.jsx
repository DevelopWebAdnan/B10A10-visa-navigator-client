const AddVisa = () => {

    const handleAddVisa = (e) => {
        e.preventDefault();
        const image = e.target.image.value;
        const name = e.target.name.value;
        const time = e.target.time.value;
        const documents = e.target.documents.checked;
        const description = e.target.description.value;
        const age = e.target.age.value;
        const fee = e.target.fee.value;
        const validity = e.target.validity.checked;
        const method = e.target.method.checked;

        console.log('Add Visa', image, name, time, documents, description, age, fee, validity, method);
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
                            <input type="text" name="image" className="input" placeholder="Country image" />
                            <label className="label">Country name</label>
                            <input type="text" name="name" className="input" placeholder="Country name" />
                            
                            {/* <div className="flex grow justify-end px-2"> */}
                            {/* <div className="flex items-stretch"> */}
                            {/* <a className="btn btn-ghost rounded-field">Button</a> */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost rounded-field">Visa_type</div>
                                <ul
                                    tabIndex="-1"
                                    className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm">
                                    <li><a>Tourist visa</a></li>
                                    <li><a>Student visa</a></li>
                                    <li><a>Office visa</a></li>
                                </ul>
                            </div>
                            {/* </div> */}
                            {/* </div> */}

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">What is the processing time?</legend>
                                {/* <input type="text" className="input" placeholder="Type here" /> */}
                                <input type="time" name="time" className="input" />
                                {/* <p className="label">Processing_time</p> */}
                            </fieldset>
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
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
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Your description</legend>
                                <textarea className="textarea h-24" placeholder="Description"></textarea>
                                {/* <div className="label">Description</div> */}
                            </fieldset>

                            <input
                                type="number"
                                name="age"
                                className="input validator"
                                required
                                placeholder="Age_restriction (between 21 to 51)"
                                min="21"
                                max="51"
                                title="Must be between be 21 to 51"
                            />
                            <p className="validator-hint">Must be between be 21 to 51</p>
                            <input
                                type="number"
                                name="fee"
                                className="input validator"
                                required
                                placeholder="Fee (in taka)"
                                min="1"
                                max="1000000"
                                title="Must be between be 1 to 1000000"
                            />
                            <p className="validator-hint">Must be between be 1 to 1000000</p>

                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
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
                            </fieldset>

                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                                <legend className="fieldset-legend">Application_method</legend>
                                <label className='label'>
                                    <input type="radio" name="radio-7" className="radio radio-success" defaultChecked /> Online
                                </label>
                                <label className='label'>
                                    <input type="radio" name="radio-7" className="radio radio-success" /> Offline
                                </label>
                            </fieldset>

                            {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                            <button className="btn btn-neutral mt-4">Add Visa</button>
                            {/* <button className="btn btn-active btn-accent">Accent</button> */}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVisa;