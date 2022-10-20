import React, { useState } from 'react';
import logo from '../../img/logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import List from '../List/List';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'Home', path: '/home'},
        {id: 2, name: 'Topics', path: '/topics'},
        {id: 3, name: 'Statistics', path: '/statistics'},
        {id: 4, name: 'Blog', path: '/blog'}
    ] 
    return (
        <nav className='w-full fixed shadow-md top-0 left-0'>
            <div className='md:flex justify-between items-center bg-cyan-100 py-5 lg:px-32 md:px-16 px-4'>
                <div className='flex font-bold text-xl text-sky-400 cursor-pointer'>
                    <img className='w-6 h-6 mr-2' src={logo} alt="" />
                    <p><span className='text-blue-500'>KT</span> Programming Quiz</p>
                </div>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 text-indigo-600 absolute right-4 top-6 cursor-pointer md:hidden'>
                    {
                        open ? <XMarkIcon/> : <Bars3Icon/>
                    }
                </div>
                <ul className={`md:flex md:pb-0 pb-4 absolute md:static bg-cyan-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 duration-500 ease-in ${open ? 'top-14' : 'top-[-16rem]'}`}>
                    {
                        routes.map(route => <List 
                            key={route.id}
                            route={route}
                            ></List>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;