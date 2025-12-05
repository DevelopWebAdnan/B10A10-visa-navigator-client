import LatestVisas from '../components/LatestVisas';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            <section className='h-[600px]'>
                <Slider></Slider>
            </section>
            <section>
                <LatestVisas></LatestVisas>
            </section>
        </div>
    );
};

export default Home;