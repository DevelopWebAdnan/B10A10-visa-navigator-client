import LatestVisas from '../components/LatestVisas';
import Slider from '../components/Slider';
import Users from '../components/Users';
import ThemeSwitcher from '../utilities/ThemeSwitcher';
import DependableVisa from '../components/DependableVisa';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const returnedData = useLoaderData();
    // console.log(returnedData);
    const { latestVisaData, userData } = returnedData;
    // console.log('latestVisaData: ', latestVisaData, 'userData: ', userData);

    return (
        <div>
            <title>Home | Visa Navigator</title>
            <div className='flex justify-center items-center'>
                <ThemeSwitcher></ThemeSwitcher>
            </div>
            <div className='bg-teal-100 dark:bg-gray-700'>
                <section className='h-[600px]'>
                    <Slider></Slider>
                </section>
                <section className='my-4 md:my-7 lg:my-12'>
                    <LatestVisas latestVisaData={latestVisaData}></LatestVisas>
                </section>
                <section className='my-4 md:my-7 lg:my-12'>
                    <DependableVisa></DependableVisa>
                </section>
                <section>
                    <Users userData={userData}></Users>
                </section>
            </div>
        </div>
    );
};

export default Home;