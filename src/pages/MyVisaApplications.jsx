import MyVisaApplication from "../components/MyVisaApplication";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData, useParams } from "react-router-dom";

// const MyVisaApplications = ({visaData, visaApplications}) => {
const MyVisaApplications = () => {

    const myLoadedApplications = useLoaderData();

    // console.log('visaData: ', visaData, 'visaApplications: ', visaApplications, 'myLoadedApplications: ', myLoadedApplications);
    console.log('myLoadedApplications: ', myLoadedApplications);

    const [myApplications, setMyApplications] = useState(myLoadedApplications);

    // const { _id, image, countryName, selectedVisa, time, fee, validity, applicationMethod } = myLoadedApplications;

    // const [search, setSearch] = useState("");
    // console.log('search: ', search);

    const { email } = useParams();
    // console.log('email from useParams(): ', email);

    const { user } = useContext(AuthContext);
    console.log('email from useParams: ', email, 'user?.email: ', user?.email);
    // const navigate = useNavigate();

    // { email === user?.email ? <>

    const handleSearch = (e) => {
        e.preventDefault();
    // const handleSearch = () => {
        const searchInput = e.target.searchInput.value;
        console.log('searchInput from handleSearch: ', searchInput);
        // setSearch(e.target.value);
        // console.log('search from handleSearch: ', search);
        // setSearch()
        // useEffect(() => {

        // fetch(`http://localhost:5000/myVisaApplications/${params.email}?searchParams=${search}`)
        // fetch(`http://localhost:5000/myVisaApplications/${email}?searchParams=${search}`)
        fetch(`http://localhost:5000/myVisaApplications/${email}?searchParams=${searchInput}`)
            .then(res => res.json())
            .then(data => {
                // setMyApplications(data);
                console.log(data);
                // const filteredApplications = myApplications.filter(applct => applct.email === email)
                const filteredApplications = data.filter(applct => applct.email === email)
                console.log('filteredApplications: ', filteredApplications);
                setMyApplications(filteredApplications);
            })
        // fetch(`http://localhost:5000/myVisaApplications?searchParams=${search}`)

        // setMyApplications(filteredApplications);
        // }, [email, search])

    }
    return (

        <div>

            <h3 className="font-bold text-lg">Email from useParams! {email}</h3>
            <h3 className="font-bold text-lg">Logged in users Email! {user?.email}</h3>
            <h3 className="font-bold text-lg">Logged in users Name! {user?.displayName}</h3>
            {/* <h3 className="font-bold text-lg">Logged in users Last Name! {user?.displayName}</h3> */}

            {/* { email === user?.email ? <> */}
            {email === user?.email && <>

                {/* </> : ""} */}
                {/* <h2 className='font-black'>My total Visa Applications: {visaApplications?.length}</h2> */}
                <h2 className='font-black'>My total Visa Applications: {myApplications?.length}</h2>
                {/* <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Country"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{countryName}</h2>
                    <p>Visa_type: {selectedVisa}</p>

                    <p>Processing_time: {time}</p>
                    <p className="py-4">Fee: {fee}</p>

                    <p>Validity: {validity}</p>
                    <p>Application_method: {applicationMethod}</p>
                    <p className="py-4">Applied date: {user?.metadata?.creationTime}</p>

                    <h3 className="font-bold text-lg">Applicant's name: {user?.displayName}</h3>
                    
                    <h3 className="font-bold text-lg">Email: {user?.email}</h3>
                    <div className="card-actions">
                        <button className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </div> */}

                {/* <label className="input">
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
                        value={search}
                        defaultValue={search}
                        onChange={e => setSearch(e.target.value)}
                        required
                        placeholder="Search" />
                </label> */}

                {/* <button onClick={handleSearch} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Search</button> */}

                <div className="join">
                    <form onSubmit={handleSearch}>
                        {/* <div> */}
                        {/* <label className="input validator join-item"> */}
                        <label className="input join-item">
                            {/* <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg> */}
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
                            {/* <input type="email" placeholder="mail@site.com" required /> */}
                            <input
                                type="search"
                                name="searchInput"
                                // value={search}
                                // defaultValue={search}
                                // onChange={e=> setSearch(e.target.value)} 
                                placeholder="Search by country name"
                                required />
                        </label>
                        {/* <div className="validator-hint hidden">Enter valid search text</div> */}
                        {/* </div> */}
                        {/* <button className="btn btn-neutral join-item">Search</button> */}
                        <input type="submit" value="Search" className="btn" />
                    </form>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        // visaApplications && visaApplications.map(visaApplication => <MyVisaApplication
                        // email === user?.email ? <>
                        // email === user?.email && myApplications && myApplications.map(myApplication => <MyVisaApplication
                        myApplications && myApplications.map(myApplication => <MyVisaApplication
                            key={myApplication._id}
                            myApplications={myApplications}
                            setMyApplications={setMyApplications}
                            // search={search}
                            // setSearch={setSearch}
                            myApplication={myApplication}
                        ></MyVisaApplication>)
                        // </>
                        // :
                    }
                </div>


            </>
                // :
                // navigate(`myVisaApplications/${email}`)
                // navigate(`/myVisaApplications/${user?.email}`)
                // navigate("/")
            }
        </div>

    );
};

export default MyVisaApplications;