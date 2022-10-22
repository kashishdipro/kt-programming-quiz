import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../img/banner.JPG'
import TopicCard from '../TopicCard/TopicCard';

const Home = () => {
    const fullData = useLoaderData();
    const {data} = fullData;
    return (
        <div className='bg-cyan-50 mt-16 lg:px-32 md:px-16 px-4 py-5'>
            <header>
                <section className='pt-36'>
                    <div className='md:flex items-center bg-cyan-200 rounded-xl'>
                        <div className='mr-4 mb-4 p-2'>
                            <p className='lg:text-4xl md:text-xl font-bold text-slate-500'>Welcome To</p>
                            <p className='lg:text-4xl md:text-xl font-bold text-sky-400'><span className='text-blue-500'>KT</span> Programming Quiz</p>
                            <div className='pt-4'>
                                <p className='lg:text-xl md:text-md text-slate-400'>You can learn React, JavaScript, CSS, Git related questions in this website. Then what are you waiting for. Let's jump!!!</p>
                            </div>
                        </div>
                        <div className='w-70 h-full'>
                            <img src={banner} alt="" />
                        </div>
                    </div>
                </section>
            </header>
            <main className='pt-6'>    
                <section  className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 content-center gap-4'>
                    {
                        data.map(quiz => <TopicCard key={quiz.id} quiz={quiz}></TopicCard>)
                    }
                </section>
            </main>
        </div>
    );
};

export default Home;