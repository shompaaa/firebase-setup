import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login

            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/about',
                element: <PrivateRoutes>
                    <About></About>
                </PrivateRoutes>
            }
        ]
    }
])