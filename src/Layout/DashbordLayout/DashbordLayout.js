import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
import useSeller from '../../Hooks/useSeller/useSeller';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashbordLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

 
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
                    <ul className="menu mt-12 p-4 w-80 text-base-content">
                    <li><Link to="/dashboard">My orders</Link></li> 
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/allusers">My Products</Link></li>
                                <li><Link to="/addProduct">Add A product </Link></li>
                             </>
                        },
                        {
                            isAdmin &&  <>
                                <li><Link to="/dashboard/allseller"> All Sellers</Link></li>
                                <li><Link to="/dashboard/allbuyer"> All Buyer</Link></li>
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