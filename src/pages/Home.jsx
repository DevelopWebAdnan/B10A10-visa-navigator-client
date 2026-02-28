import { useLoaderData } from 'react-router-dom';
import LatestVisas from '../components/LatestVisas';
import Slider from '../components/Slider';
import Users from '../components/Users';
import { useState } from 'react';
import MyVisaApplications from './myVisaApplications';
import ThemeSwitcher from '../utilities/ThemeSwitcher';

const Home = () => {
    const returnedData = useLoaderData();
    console.log(returnedData);
    const { visaData, userData, visaApplicationData } = returnedData;
    console.log('visaData: ', visaData, 'userData: ', userData, 'visaApplicationData: ', visaApplicationData);

    const [users, setUsers] = useState(userData);
    // const [visaApplications, setVisaApplications] = useState(visaApplicationData);

    return (
        <div>

        <div className='flex justify-center items-center'>
            <ThemeSwitcher></ThemeSwitcher>
        </div>

        <div className='bg-white dark:bg-gray-800'>
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
        </div>
    );
};

export default Home;