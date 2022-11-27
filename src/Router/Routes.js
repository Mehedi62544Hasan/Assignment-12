import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../Layout/DashbordLayout/DashbordLayout";
import Main from "../Layout/Main/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
 import MyOrders from "../Pages/Dashboard/Users/MyOrders/MyOrders";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products/Products";

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
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/login',
                element: <Login></Login>
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
        }
        ]
    }
]);

export default router;