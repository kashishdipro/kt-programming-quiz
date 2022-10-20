import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home/Home';
import NavBar from '../components/NavBar/NavBar';

const Main = () => {
    return (
        <div className='bg-cyan-50 w-full h-screen'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;