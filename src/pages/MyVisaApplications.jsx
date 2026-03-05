import MyVisaApplication from "../components/MyVisaApplication";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";

const MyVisaApplications = () => {

    const myLoadedApplications = useLoaderData();

    // console.log('myLoadedApplications: ', myLoadedApplications);

    const [myApplications, setMyApplications] = useState(myLoadedApplications);

    const { email } = useParams();

    const { user } = useContext(AuthContext);
    // console.log('email from useParams: ', email, 'user?.email: ', user?.email);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.searchInput.value;
        // console.log('searchInput from handleSearch: ', searchInput);

        fetch(`https://b10-a10-visa-navigator-server-ten.vercel.app/myVisaApplications/${email}?searchParams=${searchInput}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const filteredApplications = data.filter(applct => applct.email === email)
                // console.log('filteredApplications: ', filteredApplications);
                setMyApplications(filteredApplications);
            })

    }
    return (
        <div>
            <title>MyVisaApplications | Visa Navigator</title>

            {email === user?.email && <>

                <h2 className='font-black'>My total Visa Applications: {myApplications?.length}</h2>

                <form onSubmit={handleSearch}>
                    <div className="join">
                        <label className="input join-item">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                type="search"
                                name="searchInput"
                                placeholder="Search by country name"
                            />
                        </label>
                        <input type="submit" value="Search" className="btn text-base-100 bg-[#00CC99]" />
                    </div>
                </form>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                         myApplications.map(myApplication => <MyVisaApplication
                            key={myApplication._id}
                            myApplications={myApplications}
                            setMyApplications={setMyApplications}
                            myApplication={myApplication}
                        ></MyVisaApplication>)
                    }
                </div>
            </>
            }
        </div>
    );
};

export default MyVisaApplications;