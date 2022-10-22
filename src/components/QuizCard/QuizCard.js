import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';

const QuizCard = ({quiz}) => {
    const {question, options, correctAnswer} = quiz;
    console.log(quiz);
    return (
        <div className='bg-slate-200 rounded-lg shadow-lg mt-4 p-4'>
            <div className='md:flex justify-between items-center mb-4 gap-4'>
                <p className='text-2xl text-center font-semibold text-slate-500'><span>Quiz :</span> {question}</p>
                <EyeIcon className='w-6 h-6 text-slate-500'/>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mt-2 gap-4'>
                {
                    options.map(option => <label
                    key={option.id}
                    className='bg-cyan-100  rounded-lg p-4 text-xl font-normal text-slate-500'
                    >
                        <input type="radio" value={option} name='radio'/>
                        <b>{option}</b>
                    </label>)
                }
            </div>
        </div>
    );
};

export default QuizCard;