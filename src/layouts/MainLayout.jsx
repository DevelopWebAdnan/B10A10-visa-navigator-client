import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto font-openSans bg-coolbackgrounds'>
            <header className='my-2 md:my-4 lg:my-6'>
                <nav className='mb-11 md:mb-16'>
                    <Navbar></Navbar>
                </nav>

            </header>
            <main className='my-4 md:my-8 lg:my-12'>
                <Outlet></Outlet>
            </main>
            <footer className='my-4 md:my-8 lg:my-12'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;