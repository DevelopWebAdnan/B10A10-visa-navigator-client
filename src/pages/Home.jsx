import LatestVisas from '../components/LatestVisas';
import Slider from '../components/Slider';
import Users from '../components/Users';
import ThemeSwitcher from '../utilities/ThemeSwitcher';
import DependableVisa from '../components/DependableVisa';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const returnedData = useLoaderData();
    // const userData = useLoaderData();
    console.log(returnedData);
    // const { visaData, userData, visaApplicationData } = returnedData;
    // const { userData } = returnedData;
    // const { latestVisaData, userData, visaApplicationData } = returnedData;
    const { latestVisaData, userData } = returnedData;
    // console.log('visaData: ', visaData, 'userData: ', userData, 'visaApplicationData: ', visaApplicationData);
    // console.log('latestVisaData: ', latestVisaData, 'userData: ', userData, 'visaApplicationData: ', visaApplicationData);
    console.log('latestVisaData: ', latestVisaData, 'userData: ', userData);
    // console.log('userData: ', userData);

    // const [users, setUsers] = useState(userData);
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
                    {/* <LatestVisas visaData={visaData}></LatestVisas> */}
                    {/* <LatestVisas></LatestVisas> */}
                    <LatestVisas latestVisaData={latestVisaData}></LatestVisas>
                </section>
                <section>
                    <DependableVisa></DependableVisa>
                </section>
                <section>
                    {/* <Users users={users} setUsers={setUsers}></Users> */}
                    {/* <Users></Users> */}
                    <Users userData={userData}></Users>
                </section>
                {/* <section>
                <MyVisaApplications visaData={visaData} visaApplications={visaApplications} setVisaApplications={setVisaApplications}></MyVisaApplications>
            </section> */}
            </div>
        </div>
    );
};

export default Home;