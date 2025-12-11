import React from 'react';

const VisaCard = ({ visa }) => {

    const { image, name, selectedVisa, time, documents, description, age, fee, validity, applicationMethod } = visa;

    return (
        <div className="card bg-base-100 shadow-sm h-96">
            <figure className='h-1/2'>
                <img
                    className='w-full'
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{selectedVisa}</p>
                <p>{time}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;