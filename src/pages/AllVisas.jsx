import { Link, Outlet, useLoaderData } from "react-router-dom";
import Heading from "../components/Heading";
import noDuplicate from "../utilities/noDuplicate";

const AllVisas = () => {

    const allVisas = useLoaderData();
    // console.log('allVisas: ', allVisas);

    const uniqueVisas = noDuplicate(allVisas);
    // console.log('uniqueVisas: ', uniqueVisas);

    const { uniqueSelectedVisas } = uniqueVisas;
    // console.log(uniqueSelectedVisas, onlyTouristVisas, onlyOfficeVisas, onlyStudentVisas);

    return (
        <div className="bg-card-229830">
            <title>AllVisas | Visa Navigator</title>
            <Heading title="All Visas"></Heading >

            <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
                <li>
                    <details open>
                        <summary>Visa Types</summary>
                        <ul>
                            <li>
                                {/* name of each tab group should be unique */}
                                <div className="tabs tabs-box">
                                    {
                                        uniqueSelectedVisas.map(uniqueSelectedVisa =>
                                            <Link
                                                key={uniqueSelectedVisa}
                                                to={`/allVisas/${uniqueSelectedVisa}`}
                                            >
                                                <input type="radio" className="tab" aria-label={uniqueSelectedVisa} />
                                            </Link>
                                        )
                                    }
                                </div>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul >
            <Outlet></Outlet>
        </div>
    );
};

export default AllVisas;