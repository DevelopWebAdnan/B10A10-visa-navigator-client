import { useParams } from "react-router-dom";
import Heading from "./Heading";

const VisaCard = () => {

    // const { image, name, selectedVisa, time, sentence, description, age, fee, validity, applicationMethod } = visa;
    // console.log(image, name, selectedVisa, time, sentence);

    const {visaType} = useParams();
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
            <Heading title="Visa Card"></Heading>
            <div className="card bg-base-100 shadow-sm">
                {/* <figure className='h-36 md:h-44 lg:h-60'>
                    <img
                        className='w-full h-full'
                        src={image} />
                </figure> */}
                <div className="card-body">
                    <h2 className="card-title">{visaType}</h2>
                    {/* <p>Visa-type: {selectedVisa}</p>
                    <p>Processing Time: {time}</p>
                    <p>Required Documents: {sentence}</p> */}
                    Required Documents:
                    <ol>
                        {
                            // sentence.map(requiredDocument => <li>{requiredDocument}</li>)
                            // <li>{sentence}</li>
                        }
                    </ol>
                    {/* </p> */}
                    {/* <p>Rows: {rows}</p> */}
                    {/* <p>Description: {description}</p>
                    <p>Age: {age}</p>
                    <p>Fee: {fee}</p>
                    <p>Validity: {validity}</p>
                    <p>ApplicationMethod: {applicationMethod}</p> */}
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;