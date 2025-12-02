import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header className='my-2 md:my-4 lg:my-6'>
                <nav className='mb-11 md:mb-16'>
                    <Navbar></Navbar>
                </nav>
                {/* <section className='h-[600px]'>
                    <Slider></Slider>
                </section> */}
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;