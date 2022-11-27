import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../assets/mp icon.jpg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {user} = useContext(AuthContext);
 
    return (
        <div className="navbarrr px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Company"
                    title="Mobile Point"
                    className="inline-flex items-center"
                >
                    <img src={logo} alt="" className='w-12 rounded-full' />
                    <span className="ml-2 text-3xl font-bold tracking-wide text-blue-500 uppercase">
                        Mobile Point
                    </span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <Link
                            to="/"
                            aria-label="Our product"
                            title="Home"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            aria-label="Our product"
                            title="Advertised"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Advertised
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/dashboard"
                            aria-label="Product pricing"
                            title="Dashboard"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >

                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/addProduct"
                            aria-label="About us"
                            title="Add Product"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Add Product
                        </Link>
                    </li>
                </ul>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        {
                            user?.uid ?
                                <>
                                    <Link
                                        to="/"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-blue-600 text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-gray-300 py-2 px-3 rounded-lg  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        aria-label="LogOut"
                                        title="LogOut"
                                    >
                                        LogOut
                                    </Link>
                                </>
                                : <>
                                    <Link
                                        to="/login"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-blue-600 text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-gray-300 py-2 px-3 rounded-lg  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Login"
                                        title="Login"
                                    >
                                        Login
                                    </Link>
                                </>
                        }
                    </li>
                </ul>
                <div className="lg:hidden">
                    <div className='flex'>
                        <label htmlFor="my-drawer-2" className="btn btn-sm lg:hidden">Open</label>
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                    </div>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Company"
                                            title="Mobile Point"
                                            className="inline-flex items-center"
                                        >
                                            <svg
                                                className="w-8 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <rect x="3" y="1" width="7" height="12" />
                                                <rect x="3" y="17" width="7" height="6" />
                                                <rect x="14" y="1" width="7" height="6" />
                                                <rect x="14" y="11" width="7" height="12" />
                                            </svg>
                                            <span className="ml-2 text-xl font-bold tracking-wide text-blue-500 uppercase">
                                                Mobile Point
                                            </span>
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="Our product"
                                                title="Home"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="Our product"
                                                title="Advertised"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Advertised
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/dashboard"
                                                aria-label="Product pricing"
                                                title="Dashboard"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/"
                                                aria-label="About us"
                                                title="Blogs"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            {
                                                user?.uid ?
                                                    <>
                                                        <Link
                                                            to="/"
                                                             className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-blue-600 text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-gray-300 py-2 px-3 rounded-lg  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                            aria-label="LogOut"
                                                            title="LogOut"
                                                        >
                                                            LogOut
                                                        </Link>
                                                    </>
                                                    : <>
                                                        <Link
                                                            to="/login"
                                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide bg-blue-600 text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-gray-300 py-2 px-3 rounded-lg  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                            aria-label="Login"
                                                            title="Login"
                                                        >
                                                            Login
                                                        </Link>
                                                    </>
                                            }
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;