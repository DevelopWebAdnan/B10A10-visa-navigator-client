import { useLoaderData } from 'react-router-dom';
import LatestVisas from '../components/LatestVisas';
import Slider from '../components/Slider';
import Users from '../components/Users';
import { useState } from 'react';
import MyVisaApplications from './myVisaApplications';

const Home = () => {
    const returnedData = useLoaderData();
    console.log(returnedData);
    const { visaData, userData, visaApplicationData } = returnedData;
    console.log('visaData: ', visaData, 'userData: ', userData, 'visaApplicationData: ', visaApplicationData);

    const [users, setUsers] = useState(userData);
    // const [visaApplications, setVisaApplications] = useState(visaApplicationData);

    return (
        <div>
            <section className='h-[600px]'>
                <Slider></Slider>
            </section>
            <section className='my-4 md:my-7'>
                <LatestVisas visaData={visaData}></LatestVisas>
            </section>
            <section>
                <Users users={users} setUsers={setUsers}></Users>
            </section>
            {/* <section>
                <MyVisaApplications visaData={visaData} visaApplications={visaApplications} setVisaApplications={setVisaApplications}></MyVisaApplications>
            </section> */}
        </div>
    );
};

export default Home;