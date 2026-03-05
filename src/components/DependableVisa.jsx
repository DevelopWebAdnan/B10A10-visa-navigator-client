import { Fade } from 'react-awesome-reveal';

const DependableVisa = () => {
    return (
        <div className='bg-obi'>
            <div className='flex flex-col items-center justify-center my-4 md:my-6 lg:my-8 w-full'>
                <Fade cascade damping={0.5}>
                    <h2 className='text-xl md:text-2xl lg:text-4xl text-gray-200 font-bold font-playfairDisplay mb-4 md:mb-6 lg:mb-8'>Dependable and Trustworthy Visa</h2>
                    <p className='text-xs md:text-base lg:text-xl text-gray-200 font-semibold text-center'>Our team of seasoned professionals understands the complexities of immigration laws and visa procedures.</p>
                </Fade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
                <div className="card card-border bg-base-100 dark:bg-gray-800 w-80 lg:w-lg">
                    <div className="card-body">
                        <div className='flex justify-center items-center gap-4'>
                            <div className="badge badge-primary badge-lg">1</div>
                            <div className='text-black dark:text-white'>
                                <h2 className="card-title">Choose Your visa type</h2>
                                <p>Determine the visa type for your travel purpose.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100 dark:bg-gray-800 w-80 lg:w-lg">
                    <div className="card-body">
                        <div className='flex justify-center items-center gap-4'>
                            <div className="badge badge-secondary">2</div>
                            <div className='text-gray-900 dark:text-base-100'>
                                <h2 className="card-title">Contact our branches</h2>
                                <p>Start your transaction by applying to our branches.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100 dark:bg-gray-800 w-80 lg:w-lg">
                    <div className="card-body">
                        <div className='flex justify-center items-center gap-4'>
                            <div className="badge badge-accent">3</div>
                            <div className='text-gray-900 dark:text-base-100'>
                                <h2 className="card-title">Submit all the documents</h2>
                                <p>Collect all the required documents.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card card-border bg-base-100 dark:bg-gray-800 w-80 lg:w-lg">
                    <div className="card-body">
                        <div className='flex justify-center items-center gap-4'>
                            <div className="badge badge-info">4</div>
                            <div className='text-gray-900 dark:text-base-100'>
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