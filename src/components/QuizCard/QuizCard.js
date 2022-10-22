import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizCard = ({quiz}) => {
    const {question, options, correctAnswer} = quiz;

    const displayCorrectAnswer =()=>{
        toast.info('Correct Answer: '+ correctAnswer, {position: toast.POSITION.TOP_RIGHT});
    }
    const matchAns = option =>{
        if(option === correctAnswer){
            toast.success('Your are right', {position: toast.POSITION.BOTTOM_CENTER});
        }else{
            toast.warn('Your are wrong', {position: toast.POSITION.BOTTOM_CENTER});
        }
    }

    return (
        <div className='bg-slate-200 rounded-lg shadow-lg mt-4 p-4'>
            <div className='md:flex justify-between items-center mb-4 gap-4'>
                <p className='text-2xl text-center font-semibold text-slate-500'><span>Quiz :</span> {question}</p>
                <EyeIcon onClick={displayCorrectAnswer} className='w-6 h-6 text-slate-500'/>
                <ToastContainer/>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 mt-2 gap-4'>
                {
                    options.map(option => <label
                    key={option}
                    className='bg-cyan-100  rounded-lg p-4 text-xl font-normal text-slate-500'
                    >
                        <input type="radio" value={option} name='radio' onClick={() => matchAns(option)}/>
                        <b>{option}</b>
                    </label>)
                }
                <ToastContainer/>
            </div>
        </div>
    );
};

export default QuizCard;