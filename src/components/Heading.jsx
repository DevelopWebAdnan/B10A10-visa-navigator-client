import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Heading = ({ title, subtitle }) => {
    return (
        <div className='flex flex-col items-center justify-center my-12 w-full'>
            <Fade cascade damping={0.5}>
                <h2 className='text-xl md:text-2xl lg:text-4xl text-gray-900 dark:text-white font-thin mb-4'>{title}</h2>
                <p className='text-xs md:text-base text-gray-600 dark:text-gray-400 font-thin text-center'>{subtitle}</p>
            </Fade>
        </div>
    );
};

export default Heading;