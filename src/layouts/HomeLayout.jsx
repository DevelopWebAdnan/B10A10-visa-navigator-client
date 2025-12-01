import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;