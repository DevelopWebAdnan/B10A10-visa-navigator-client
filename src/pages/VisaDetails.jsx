import React from 'react';

const VisaDetails = () => {
    return (
        <div>
            <h2 className='font-black'>Visa Details</h2>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Email!</h3>
                    <h3 className="font-bold text-lg">First Name!</h3>
                    <h3 className="font-bold text-lg">Last Name!</h3>
                    <p className="py-4">Applied date (current date)</p>
                    <p className="py-4">Fee (visa fee)</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Apply</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default VisaDetails;