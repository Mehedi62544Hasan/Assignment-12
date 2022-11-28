import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashbordLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)

 
    return (
        <div>
            <Navbar></Navbar>
            <div className="navbarrr drawer drawer-mobile mt-16">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                    <li><Link to="/dashboard">My orders</Link></li>
                    {/* <li><Link to="/dashboard/allseller">All Seller</Link></li> */}
                        {
                            // isBuyer && <li><Link to="/dashboard">My orders</Link></li>
                        },
                        {/* {
                            isSeller && <>
                                <li><Link to="/dashboard/allusers">My Products</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A product </Link></li>
                                <li><Link to="/dashboard/managedoctors">My buyers</Link></li>
                            </>
                        }, */}
                        {
                            isAdmin &&  <>
                                <li><Link to="/dashboard/allseller"> All Sellers</Link></li>
                                 {/* <li><Link to="/dashboard/adddoctor">All Buyers</Link></li> */}
                            </>
                        }
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashbordLayout;