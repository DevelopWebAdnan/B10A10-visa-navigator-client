import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import defaultUser from "../assets/user.png";

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('User sign out is successful.')
            })
            .catch(error => { console.log('ERROR', error.message) })
    }

    console.log(user);

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allVisas">All Visas</NavLink></li>
        {
            user && <>
                <li><NavLink to="/addVisa">Add Visa</NavLink></li>
                {/* <li><NavLink to={`/addedVisas/${user.email}`}>My Added Visas</NavLink></li> */}
                {/* <li><NavLink to={`/visas/${user.email}`}>My Added Visas</NavLink></li> */}
                {/* <li><NavLink to="/myAddedVisas">My Added Visas</NavLink></li> */}
                {/* <li><NavLink to="/myVisas">My Added Visas</NavLink></li> */}
                <li><NavLink to={`myVisas/${user.email}`}>My Added Visas</NavLink></li>
                {/* <li><NavLink to={`/visaApplications/${user.email}`}>My Visa Applications</NavLink></li> */}
                <li><NavLink to={`/myVisaApplications/${user.email}`}>My Visa Applications</NavLink></li>
                {/* <li><NavLink to='/myVisaApplications'>My Visa Applications</NavLink></li> */}
            </>
        }
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a href="/" className="text-xl md:text-2xl lg:text-3xl">VISA NAVIGATOR</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex gap-2 items-center justify-center">
                            <img src={user.photoURL} className="w-11 md:w-12 lg:w-14 rounded-4xl md:rounded-3xl lg:rounded-2xl" alt="real user photo" title={user.displayName} />
                            <a onClick={handleSignOut} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Logout</a>
                        </div>
                        :
                        <>
                            <img src={defaultUser} alt="default user photo" />
                            <Link to="login"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Login</button></Link>
                            <Link to="register"><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Register</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;