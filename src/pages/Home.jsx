import { useLoaderData } from 'react-router-dom';
import LatestVisas from '../components/LatestVisas';
import Slider from '../components/Slider';
import Users from '../components/Users';

const Home = () => {
    const returnedData = useLoaderData();
    console.log(returnedData);
    const {visaData, userData} = returnedData;
    console.log(visaData, userData);

    return (
        <div>
            <section className='h-[600px]'>
                <Slider></Slider>
            </section>
            <section className='my-4 md:my-7'>
                <LatestVisas visaData={visaData}></LatestVisas>
            </section>
            <section>
                <Users userData={userData}></Users>
            </section>
        </div>
    );
};

export default Home;