import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../Layout/DashbordLayout/DashbordLayout";
import Main from "../Layout/Main/Main";
import AllBuyer from "../Pages/Dashboard/Admin/AllBuyers/AllBuyers";
import AllSeller from "../Pages/Dashboard/Admin/AllSellers/AllSellers";
 import AddProduct from "../Pages/Dashboard/Seller/AddProduct/AddProduct";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts/MyProducts";
import MyOrders from "../Pages/Dashboard/Users/MyOrders/MyOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products/Products";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/products?category=${params.id}`),
                element: <Products></Products>
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
        element: <DashbordLayout></DashbordLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            }
        ]
    }
]);

export default router;