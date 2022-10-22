import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const QuizDetails = () => {
    const topic = useLoaderData();
    const {data} = topic;
    const {questions} = data;
    return (
        <section className='bg-cyan-50 mt-16 lg:px-32 md:px-16 px-4 py-5'>
            <div className='pt-52'>
                <h2 className='font-bold text-4xl text-center text-slate-500 mb-2'>Quiz of {data.name}</h2>
                {
                    questions.map(quiz => <QuizCard
                    key={quiz.id}
                    quiz={quiz}
                    ></QuizCard>)
                }
            </div>
            
        </section>
    );
};

export default QuizDetails;