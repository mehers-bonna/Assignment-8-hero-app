import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router';
import Banner from '../components/Banner';

const Layouts = () => {
    const location = useLocation()
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
            {location.pathname === "/" && <Banner/>}
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layouts;