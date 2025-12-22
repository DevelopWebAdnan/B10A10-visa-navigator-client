import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";
// import { useState } from "react";

const AllVisas = () => {

    const visas = useLoaderData();
    console.log(visas);
    // const { image, name, selectedVisa, time, documents, description, age, fee, validity, applicationMethod } = visas;

    // const [isAvailable, setIsAvailable] = useState(false);

    return (
        <div>
            <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
                <li><a>Item 1</a></li>
                <li>
                    <details open>
                        <summary>Parent item</summary>
                        <ul>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li>
                                <details open>
                                    <summary>Parent</summary>
                                    <ul>
                                        <li><a>item 1</a></li>
                                        <li><a>item 2</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            All Visas
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {/* <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img
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
                </div> */}
                {/* {
                    visas.map(visa => <VisaCard
                        key={visa._id}
                        visa={visa}
                        // isAvailable={isAvailable}         
                    ></VisaCard>)
                } */}
                {
                    visas.map(visa => <div className="card bg-base-100 shadow-sm"
                        key={visa._id}
                        visa={visa}
                    >
            <figure className='h-36 md:h-44 lg:h-60'>
                <img
                    className='w-full h-full'
                    src={visa.image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{visa.name}</h2>
                <p>SelectedVisa: {visa.selectedVisa}</p>
                <p>Time: {visa.time}</p>
                <p>Required Documents: {visa.sentence}</p>
                Required Documents:
                    <ol>
                        {
                            // sentence.map(requiredDocument => <li>{requiredDocument}</li>)
                            <li>{visa.sentence}</li>
                        }
                    </ol>
                {/* </p> */}
                {/* <p>Rows: {rows}</p> */}
                {/* <p>Description: {visa.description}</p>
                <p>Age: {visa.age}</p>
                <p>Fee: {visa.fee}</p>
                <p>Validity: {visa.validity}</p>
                <p>ApplicationMethod: {visa.applicationMethod}</p> */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
                        // key={visa._id}
                        // visa={visa}
                        // isAvailable={isAvailable}         
                    )
                }
            </div>
        </div>
    );
};

export default AllVisas;