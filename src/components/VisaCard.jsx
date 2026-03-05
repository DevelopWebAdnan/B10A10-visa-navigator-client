import { Link, useLoaderData, useParams } from "react-router-dom";

const VisaCard = () => {

    const loadedVisaCards = useLoaderData();
    // console.log('loadedVisaCards: ', loadedVisaCards);

    const { visaType } = useParams();
    // console.log(visaType);

    return (
        <div>
            <h3 className="font-bold text-sm md:text-base lg:text-lg text-gray-200 text-center mb-4 md:mb-5 lg:mb-6">{visaType}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    loadedVisaCards.map(loadedVisaCard =>
                        <div key={loadedVisaCard._id} className="card bg-base-100 shadow-sm">

                            <figure className='h-36 md:h-44 lg:h-60'>
                                <img
                                    className='w-full h-full'
                                    src={loadedVisaCard.image} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{visaType}</h2>
                                <p>Processing Time: {loadedVisaCard.time}</p>
                                Required Documents:
                                <ol>
                                    {
                                        loadedVisaCard.sentence.map(requiredDocument => <li
                                            key={requiredDocument}
                                        >{requiredDocument}
                                        </li>)
                                    }
                                </ol>
            
                                <div className="card-actions justify-end">
                                    <Link to={`/visaDetails/${loadedVisaCard._id}`}><button className="btn text-base-100 bg-[#00CC99]">See Details</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default VisaCard;