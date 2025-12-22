const VisaCard = ({ visa }) => {

    const { image, name, selectedVisa, time, sentence, description, age, fee, validity, applicationMethod } = visa;
    console.log(image, name, selectedVisa, time, sentence);

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
        <div className="card bg-base-100 shadow-sm">
            <figure className='h-36 md:h-44 lg:h-60'>
                <img
                    className='w-full h-full'
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>SelectedVisa: {selectedVisa}</p>
                <p>Time: {time}</p>
                <p>Required Documents: {sentence}</p>
                Required Documents:
                    <ol>
                        {
                            // sentence.map(requiredDocument => <li>{requiredDocument}</li>)
                            <li>{sentence}</li>
                        }
                    </ol>
                {/* </p> */}
                {/* <p>Rows: {rows}</p> */}
                <p>Description: {description}</p>
                <p>Age: {age}</p>
                <p>Fee: {fee}</p>
                <p>Validity: {validity}</p>
                <p>ApplicationMethod: {applicationMethod}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;