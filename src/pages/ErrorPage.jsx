import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {
                    error.statusText || error.message
                }
            </p>
        </div>
    );
};

export default ErrorPage;