import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
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
                loader: ({params}) => fetch(`http://localhost:5000/products?category=${params.id}`),
                element: <Products></Products>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router;