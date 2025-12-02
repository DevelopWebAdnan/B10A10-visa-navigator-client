import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <h2>Oops!!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {
                    error.statusText || error.message
                }
            </p>
            {
                error.status === 404 && <div className='flex flex-col justify-center items-center gap-4'>
                    <p>Page not found</p>
                    <p>Go back to where you are from</p>
                    <Link to="/"><button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl'>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;