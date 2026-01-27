import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div className='flex flex-col items-center justify-center my-12 w-full'>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-thin mb-4'>{title}</h2>
            <p className='text-xs md:text-base text-gray-600 font-thin text-center'>{subtitle}</p>
        </div>
    );
};

export default Heading;