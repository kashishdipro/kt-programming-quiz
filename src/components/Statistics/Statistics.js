import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const fullData = useLoaderData();
    const {data} = fullData;
    console.log(data);
    return (
        <section className='bg-cyan-50 mt-16 lg:px-32 md:px-16 px-4 py-5'>
            <div className="pt-36">
            <h2 className='text-2xl font-bold text-center text-slate-500 mb-2'>This is the name and total statistics of quiz:</h2>
                <LineChart width={350} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d"/>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                </LineChart>
            </div>
        </section>
    );
};

export default Statistics;