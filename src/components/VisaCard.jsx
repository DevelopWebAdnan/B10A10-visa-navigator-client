import { Link, useLoaderData, useParams } from "react-router-dom";
import Heading from "./Heading";

// const VisaCard = ({ visa }) => {
const VisaCard = () => {

    const loadedVisaCards = useLoaderData();
    console.log('loadedVisaCards: ', loadedVisaCards);

    // const { image, countryName, selectedVisa, time, sentence } = visa;
    // console.log(image, countryName, selectedVisa, time, sentence);

    const { visaType } = useParams();
    console.log(visaType);

    // const requiredDocuments = <ol>
    //     {
    //         sentence.map(requiredDocument => <li>{requiredDocument}</li>)
    //     }
    // </ol>
    // function RequiredDocument({document}) {
    // const name = document ? document :
    // <span style={{color: "red"}}>
    //     {sentence}
    // </span>

    //     return (
    //         {name}
    // );
    // }

    // const rows = [];

    //  const requiredDocuments = sentence.forEach(requiredDocument => {
    // console.log(sentence);
    //     if (isAvailable && !document) {
    // return requiredDocument;
    //     }
    //     rows.push(
    //         RequiredDocument(document)
    //         document={document}
    //         key={document}
    //         ></RequiredDocument>
    // );
    // });


    return (
        <div>
            {/* <Heading title="Visa Card"></Heading> */}
            {/* <Link to={`/allVisas/${visa.selectedVisa}`}> */}
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
                                {/* <p>Visa-type: {loadedVisaCard.selectedVisa}</p> */}
                                <p>Processing Time: {loadedVisaCard.time}</p>
                                {/* <p>Required Documents: {loadedVisaCard.sentence}</p> */}
                                Required Documents:
                                <ol>
                                    {
                                        loadedVisaCard.sentence.map(requiredDocument => <li
                                            key={requiredDocument}
                                        >{requiredDocument}
                                        </li>)
                                        // <li>{loadedVisaCard.sentence}</li>
                                    }
                                </ol>
                                {/* <p>Rows: {loadedVisaCard.rows}</p> */}
                                {/* <p>Description: {loadedVisaCard.description}</p>
                                <p>Age: {loadedVisaCard.age}</p>
                                <p>Fee: {loadedVisaCard.fee}</p>
                                <p>Validity: {loadedVisaCard.validity}</p>
                                <p>ApplicationMethod: {loadedVisaCard.applicationMethod}</p> */}
                                <div className="card-actions justify-end">
                                    {/* <button className="btn btn-primary">See Details</button> */}
                                    <Link to={`/visaDetails/${loadedVisaCard._id}`}><button className="btn btn-primary">See Details</button></Link>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
            {/* </Link> */}
        </div>
    );
};

export default VisaCard;