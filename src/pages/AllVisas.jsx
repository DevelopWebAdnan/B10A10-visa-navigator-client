import { Link, Outlet, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import VisaCard from "../components/VisaCard";
import noDuplicate from "../utilities/noDuplicate";

const AllVisas = () => {

    const allVisas = useLoaderData();
    console.log('allVisas: ', allVisas);

    const uniqueVisas = noDuplicate(allVisas);
    console.log('uniqueVisas: ', uniqueVisas);

    const { uniqueSelectedVisas, onlyTouristVisas, onlyOfficeVisas, onlyStudentVisas } = uniqueVisas;
    console.log(uniqueSelectedVisas, onlyTouristVisas, onlyOfficeVisas, onlyStudentVisas);

    // const [isAvailable, setIsAvailable] = useState(false);

    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box">
                <input type="radio" name="my_tabs_1" className="tab" aria-label="tourist visa" />
                <input type="radio" name="my_tabs_1" className="tab" aria-label="office visa" defaultChecked />
                <input type="radio" name="my_tabs_1" className="tab" aria-label="student visa" />
            </div>

            <div className="overflow-x-auto max-w-60">
                <div className="tabs-lift tabs min-w-max">
                    <input type="radio" name="my_tabs_7" className="tab z-1" aria-label="Tab title 1" />
                    <div className="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Tab content 1</div>
                    <input type="radio" name="my_tabs_7" className="tab z-1" aria-label="Tab title 2" defaultChecked />
                    <div className="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Tab content 2</div>
                    <input type="radio" name="my_tabs_7" className="tab z-1" aria-label="Tab title 3" />
                    <div className="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Tab content 3</div>
                    <input type="radio" name="my_tabs_7" className="tab z-1" aria-label="Tab title 4" />
                    <div className="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Tab content 4</div>
                </div>
            </div>

            <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
                {/* <li><Link to={`allVisas/${allVisas.selectedVisa}`}>{allVisas.selectedVisa}</Link></li> */}

                <li>
                    {/* <Link to={`allVisas/${allVisas.selectedVisa}`}> */}
                    {/* <Link to={`allVisas/${allVisas.selectedVisa}`}>
                        <VisaCard key={visa._id} visa={visa}></VisaCard>
                    </Link> */}
                    {/* <Outlet visa={visa}></Outlet> */}

                    {/* {
                        allVisas.map(visa => */}
                    {/* <Link to={`allVisas/${visa.selectedVisa}`}>
                            <div className="card bg-base-100 shadow-sm"
                                key={visa._id}
                            >
                                <figure className='h-36 md:h-44 lg:h-60'>
                                    <img
                                        className='w-full h-full'
                                        src={visa.image} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{visa.countryName}</h2>
                                    <p>SelectedVisa: {visa.selectedVisa}</p>
                                    <p>Time: {visa.time}</p> */}
                    {/* <p>Required Documents: {visa.sentence}</p> */}
                    {/* <ol>
                                        Required Documents:
                                        {
                                            visa.sentence.map((requiredDocument, index) => <li key={index}>{requiredDocument}</li>)
                                        }
                                    </ol>

                                    <p>Description: {visa.description}</p>
                                    <p>Age: {visa.age}</p>
                                    <p>Fee: {visa.fee}</p>
                                    <p>Validity: {visa.validity}</p>
                                    <p>ApplicationMethod: {visa.applicationMethod}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/visaDetails/${visa._id}`}><button className="btn btn-primary">See Details</button></Link>
                                    </div>
                                </div>
                            </div>
                            // </Link>
                        )
                    } */}
                    {/* </Link> */}
                </li >

                <li>
                    <details open>
                        {/* <summary>Parent item</summary> */}
                        <summary>Visa Types</summary>
                        <ul>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            {/* <li><Link to={`allVisas/${allVisas.selectedVisa}`}>{allVisas.selectedVisa}</Link></li> */}
                            <li>
                                {/* name of each tab group should be unique */}
                                <div className="tabs tabs-box">
                                    {
                                        uniqueSelectedVisas.map(uniqueSelectedVisa =>
                                            <Link
                                                key={uniqueSelectedVisa}
                                                to={`/allVisas/${uniqueSelectedVisa}`}
                                            >
                                                <input type="radio" name="my_tabs_1" className="tab" aria-label={uniqueSelectedVisa} />
                                            </Link>
                                        )
                                    }
                                    {/* <input type="radio" name="my_tabs_1" className="tab" aria-label="office visa" defaultChecked />
                                    <input type="radio" name="my_tabs_1" className="tab" aria-label="student visa" /> */}
                                </div>

                                <div className="overflow-x-auto max-w-60">
                                    <div className="tabs-lift tabs min-w-max">
                                        <input type="radio" name="my_tabs_7" className="tab z-1" aria-label="Tourist visa" />
                                        <div className="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Tourist Visas</div>
                                {
                                    //  allVisas.map(visa => (
                                    uniqueSelectedVisas.map(uniqueSelectedVisa => (
                                        //  <Link to={`/allVisas/${allVisas.selectedVisa}`}>
                                        //  <Link key={visa.selectedVisa} to={`/allVisas/${visa.selectedVisa}`}>

                                        <Link key={uniqueSelectedVisa} to={`/allVisas/${uniqueSelectedVisa}`}>
                                            {uniqueSelectedVisa}
                                            {/* {visa.selectedVisa} */}
                                            <input type="radio" name="my_tabs_7" className="tab z-1" aria-label={uniqueSelectedVisa} />
                                            <div className="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">{uniqueSelectedVisa}</div>
                                        </Link>
                                    ))
                                }
                                        {/* <input type="radio" name="my_tabs_7" className="tab z-1" aria-label="Office visas" defaultChecked />
                                        <div className="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Office visas</div>
                                        <input type="radio" name="my_tabs_7" className="tab z-1" aria-label="Student Visas" />
                                        <div className="sticky start-0 tab-content max-w-60 border-base-300 bg-base-100 p-6">Student visas</div> */}
                                    </div>
                                </div>

                            </li>
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
                {/* <li><a>Item 3</a></li> */}


            </ul >

            {/* <Outlet></Outlet> */}

            <Heading title="All Visas"></Heading >

            <Outlet></Outlet>

            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"> */}
                {/* {
                     visas.map(visa => <VisaCard
                     allVisas.map(visa =>
                         <Link to={`/allVisas/${visa.selectedVisa}`}>
                        <VisaCard
                            key={visa._id}
                            visa={visa}
                         isAvailable={isAvailable}         
                        ></VisaCard>)
                     </Link>)
                } */}

                {/* {
                    allVisas.map(visa => <div className="card bg-base-100 shadow-sm"
                        key={visa._id}
                    >
                        <figure className='h-36 md:h-44 lg:h-60'>
                            <img
                                className='w-full h-full'
                                src={visa.image} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{visa.countryName}</h2>
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
                {/* <div className="card-actions justify-end">
                                <Link to={`/visaDetails/${visa._id}`}><button className="btn btn-primary">See Details</button></Link>
                            </div>
                        </div>
                </div>
                   )
                }*/}
            {/* </div> */}
        </div>
    );
};

export default AllVisas;