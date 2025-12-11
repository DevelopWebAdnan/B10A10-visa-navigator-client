import { useLoaderData } from 'react-router-dom';
import LatestVisas from '../components/LatestVisas';
import Slider from '../components/Slider';

const Home = () => {
    const visas = useLoaderData();

    return (
        <div>
            <section className='h-[600px]'>
                <Slider></Slider>
            </section>
            <section>
                <LatestVisas visas={visas}></LatestVisas>
            </section>
        </div>
    );
};

export default Home;