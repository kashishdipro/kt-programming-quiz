import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Topics = () => {
    const fullData = useLoaderData();
    const {data} = fullData;
    return (
        <main className='bg-cyan-50 mt-16 lg:px-32 md:px-16 px-4 py-5'>
            <section className="pt-36">
                <div  className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 content-center gap-4'>
                    {
                        data.map(quiz => <TopicCard key={quiz.id} quiz={quiz}></TopicCard>)
                    }
                </div>
            </section>
        </main>
    );
};

export default Topics;