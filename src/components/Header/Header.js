import React from 'react';
import banner from '../../img/banner.JPG'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <header>
            <h2 className='text-2xl font-bold'>This is Header</h2>
            <section className='py-36'>
                <div className='md:grid grid-cols-2 justify-items-center gap-4'>
                    <div className='mb-4'>
                        <p className='lg:text-4xl md:text-xl font-bold text-gray-600'>Welcome To</p>
                        <p className='lg:text-4xl md:text-xl font-bold text-sky-400'><span className='text-blue-500'>KT</span> Programming Quiz</p>
                        <div className='pt-4'>
                            <p className='lg:text-xl md:text-md text-gray-400'>You can learn React, JavaScript, CSS, Git related question in this website. Then what are you waiting for. Let's jump!!!</p>
                        </div>
                        <button className='flex items-center p-4 rounded text-white font-semibold bg-blue-600 mt-4'>
                            <p>Get Start</p>
                            <ArrowRightIcon className='w-4 h-4 ml-2'/>
                        </button>
                    </div>
                    <div className='w-full h-80'>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;