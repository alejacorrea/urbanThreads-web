import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import { Outlet } from "react-router-dom";

export let routerApp = [
    {
        path:"/",
        element: <Home />
    },
    {
        path: "/dashboard",
        element: <Products />
    },
    {
        path: "/register",
        element: <Contact />
    }
]