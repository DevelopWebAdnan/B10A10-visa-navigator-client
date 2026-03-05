import { Fade } from 'react-awesome-reveal';

const Heading = ({ title, subtitle }) => {
    return (
        <div className='flex flex-col items-center justify-center my-4 md:my-6 lg:my-8 w-full'>
            <Fade cascade damping={0.5}>
                <h2 className='text-xl md:text-2xl lg:text-4xl text-gray-800 dark:text-gray-200 font-bold font-playfairDisplay'>{title}</h2>
                <p className='text-xs md:text-base lg:text-xl text-gray-800 dark:text-gray-200 font-semibold'>{subtitle}</p>
            </Fade>
        </div>
    );
};

export default Heading;