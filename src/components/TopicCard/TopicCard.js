import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const TopicCard = ({quiz}) => {
    const {logo, name, total, id} = quiz;
    return (
        <div className='bg-slate-200 rounded-lg'>
            <img className='bg-slate-100 rounded-lg p-2' src={logo} alt="" />
            <div className='text-center mt-2 p-2'>
                <p className='text-2xl font-bold text-slate-500'>{name}</p>
                <p className='text-xl font-semibold text-slate-500'>Total Questions: <span className='text-rose-600'>{total}</span></p>
                <Link to={`/quiz/${id}`} className='flex justify-center items-center  mt-2 p-2 rounded-lg text-white font-semibold bg-sky-600'>
                <p>Start Practice</p>
                <ArrowRightIcon className='w-4 h-4 ml-2'/>
                </Link>
            </div>
        </div>
    );
};

export default TopicCard;