import React from "react";
import Header from "./components/header/header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/footer/Footer";
import { Outlet,useLocation } from "react-router-dom";
import { useEffect } from "react";

function Layout(){
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on every route change
    }, [pathname]);
    return(
        <>
       
        <Navbar/>
        {/* <Header/> */}
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout;