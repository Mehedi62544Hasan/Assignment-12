import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import DashbordLayout from "../Layout/DashbordLayout/DashbordLayout";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import AllBuyer from "../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSeller from "../Pages/Dashboard/Admin/AllSellers/AllSellers";
 import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts/MyProducts";
import MyOrders from "../Pages/Dashboard/Users/MyOrders/MyOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products/Products";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:id',
                loader: ({ params }) => fetch(`https://resale-mobile-point-server.vercel.app/products?category=${params.id}`),
                element: <Products></Products>
            }, 
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            } 
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashbordLayout></DashbordLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            }
        ]
    }
]);

export default router;