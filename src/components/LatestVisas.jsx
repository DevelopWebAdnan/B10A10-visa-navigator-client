import { Link } from "react-router-dom";
import Heading from "./Heading";

const LatestVisas = ({ visaData }) => {
    console.log(visaData);

    return (
        <div>
            <Heading title="Latest Visas"></Heading>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    visaData.length === 0 ? (
                        <p>No visa data found.</p>
                    ) : (
                        visaData.map(visa =>
                            <div className="card bg-base-100 image-full shadow-sm h-72"
                                key={visa._id}
                            >
                                <figure className=''>
                                    <img
                                        className='w-full'
                                        src={visa.image} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{visa.countryName}</h2>
                                    <p>Visa-type: {visa.selectedVisa}</p>
                                    <p>Processing Time: {visa.time}</p>
                                    <p>Fee: {visa.fee}</p>
                                    <p>Validity: {visa.validity}</p>
                                    <p>ApplicationMethod: {visa.applicationMethod}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/visaDetails/${visa._id}`}><button className="btn btn-primary">See Details</button></Link>
                                    </div>
                                </div>
                            </div>
                            // <VisaCard
                            //     key={visa._id}
                            //     visa={visa}
                            // ></VisaCard>
                        )
                    )
                }

            </div>

            <div className="text-center">
                <Link to="/allVisas"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl my-6">See all visas</button></Link>
            </div>
        </div>
    );
};

export default LatestVisas;