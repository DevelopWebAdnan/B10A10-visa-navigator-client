import React from 'react';
import Heading from './Heading';

const DependableVisa = () => {
    return (
        <div>
            <Heading title="Dependable and Trustworthy Visa"></Heading>
            <Heading subtitle="Our team of seasoned professionals understands the complexities of immigration laws and visa procedures."></Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="card card-border bg-base-100 w-96 lg:w-lg">
                    <div className="card-body">
                        <div className='flex justify-center items-center gap-4'>
                            {/* <button className="btn btn-circle">
                                1
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                            </button>
                            <div class="avatar avatar-placeholder">
                                <div class="bg-neutral text-neutral-content w-12 rounded-full">
                                    <span>SY</span>
                                </div>
                            </div> */}
                            {/* <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                                        1
                                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                    </div>
                                </div> */}
                            {/* <div class="avatar avatar-placeholder">
                                    <div class="bg-neutral text-neutral-content w-8 rounded-full">
                                        <span class="text-xs">1</span>
                                    </div>
                                </div> */}
                            <div className="badge badge-primary badge-lg">1</div>
                            <div>
                                <h2 className="card-title">Choose Your visa type</h2>
                                <p>Determine the visa type for your travel purpose.</p>
                                {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100 w-96 lg:w-lg">
                    <div className="card-body">
                        <div className='flex justify-center items-center gap-4'>
                            {/* <div class="avatar avatar-placeholder">
                                    <div class="bg-neutral text-neutral-content w-8 rounded-full">
                                        <span class="text-xs">2</span>
                                    </div>
                                </div> */}
                            <div className="badge badge-secondary">2</div>
                            <div>
                                <h2 className="card-title">Contact our branches</h2>
                                <p>Start your transaction by applying to our branches.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100 w-96 lg:w-lg">
                    <div className="card-body">
                        <div className='flex justify-center items-center gap-4'>
                            {/* <div class="avatar avatar-placeholder">
                                    <div class="bg-neutral text-neutral-content w-8 rounded-full">
                                        <span class="text-xs">3</span>
                                    </div>
                                </div> */}
                            <div className="badge badge-accent">3</div>
                            <div>
                                <h2 className="card-title">Submit all the documents</h2>
                                <p>Collect all the required documents.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100 w-96 lg:w-lg">
                    <div className="card-body">
                        <div className='flex justify-center items-center gap-4'>
                            {/* <div class="avatar avatar-placeholder">
                                    <div class="bg-neutral text-neutral-content w-8 rounded-full">
                                        <span class="text-xs">4</span>
                                    </div>
                                </div> */}
                            <div className="badge badge-info">4</div>
                            <div>
                                <h2 className="card-title">Passport delivery</h2>
                                <p>Receive your visa, which is finalized after application.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DependableVisa;