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

    const {email} = useParams();
    console.log(email);

    const { user } = useContext(AuthContext);

    return (

        <div>

            <h3 className="font-bold text-lg">Logged in users First Name! {user?.displayName}</h3>
            <h3 className="font-bold text-lg">Logged in users Last Name! {user?.displayName}</h3>

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

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                // visaApplications && visaApplications.map(visaApplication => <MyVisaApplication
                myApplications && myApplications.map(myApplication => <MyVisaApplication
                    key={myApplication._id}
                    myApplications={myApplications}
                    setMyApplications={setMyApplications}
                    myApplication={myApplication}
                ></MyVisaApplication>)
            }
            </div>
        </div>
    );
};

export default MyVisaApplications;