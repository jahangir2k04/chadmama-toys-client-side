import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {

    const menuItems = <>
        <NavLink to='/'
            className={({ isActive }) => isActive ? 'active' : ''}
        >Home</NavLink>
        <NavLink to='/all-toys'
            className={({ isActive }) => isActive ? 'active' : ''}
        >All Toys</NavLink>
        <NavLink to='/my-toys'
            className={({ isActive }) => isActive ? 'active' : ''}
        >My Toys</NavLink>
        <NavLink to='/add-toy'
            className={({ isActive }) => isActive ? 'active' : ''}
        >Add A Toy</NavLink>
        <NavLink to='/blogs'
            className={({ isActive }) => isActive ? 'active' : ''}
        >Blogs</NavLink>
    </>

    return (
        <div className="navbar max-w-7xl mx-auto md:mt-5 md:p-0">
            <div className="navbar-start space-x-2">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="flex items-center normal-case text-[#ce0000] text-2xl md:text-3xl font-bold">
                    <img className='w-5 h-5 md:w-8 md:h-8' src="/toy-logo-r.png" />
                    <span>ChadmamaToys</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-6 ">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <FaUserCircle className='mr-1 w-9 md:w-12 h-9 md:h-12' title='User Name' />
                <Link to='/login'>
                    <button className='bg-[#ce0000] px-3 md:px-6 py-1 md:py-2 text-xl md:text-2xl text-white font-semibold rounded-lg'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;