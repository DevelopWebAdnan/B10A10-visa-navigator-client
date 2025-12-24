import { useLoaderData } from 'react-router-dom';
import LatestVisas from '../components/LatestVisas';
import Slider from '../components/Slider';
import Users from '../components/Users';
import { useState } from 'react';

const Home = () => {
    const returnedData = useLoaderData();
    console.log(returnedData);
    const {visaData, userData} = returnedData;
    console.log(visaData, userData);
    
    const [users, setUsers] = useState(userData);

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
        </div>
    );
};

export default Home;