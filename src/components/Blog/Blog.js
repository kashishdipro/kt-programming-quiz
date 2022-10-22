import React from 'react';

const Blog = () => {
    return (
        <section className='bg-cyan-50 mt-16 lg:px-32 md:px-16 px-4 py-5'>
            <div className="pt-32">
                <div className='bg-slate-200 rounded-lg shadow-lg my-4 p-4'>
                    <p className='text-2xl font-bold text-slate-500 mb-2'>What is the purpose react router?</p>
                    <p className='text-xl font-bold text-slate-500'>Ans: <span className='text-2xl'>React Router</span> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                </div>
                <div className='bg-slate-200 rounded-lg shadow-lg my-4 p-4'>
                    <p className='text-2xl font-bold text-slate-500 mb-2'>How does context api work?</p>
                    <p className='text-xl font-bold text-slate-500'>Ans: The React <span className='text-2xl'>Context API</span> is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <span className='text-2xl'>React.createContext()</span> is all you need. It returns a consumer and a provider. <span className='text-2xl'>Provider</span> is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. <span className='text-2xl'>Consumer</span> as it so happens is a component that consumes and uses the state.</p>
                </div>
                <div className='bg-slate-200 rounded-lg shadow-lg my-4 p-4'>
                    <p className='text-2xl font-bold text-slate-500 mb-2'>What do you understand about useRef()?</p>
                    <p className='text-xl font-bold text-slate-500'>Ans: The hook <span className='text-2xl'>useRef()</span> in React returns an object that has a property current that we can access as we do with objects. This property is initialized to the passed argument in the function <span className='text-2xl'>useRef()</span>. The returned object will persist for the full lifetime of the component.</p>
                </div>
                <div>
                
                </div>
                <div></div>
                <div></div>
            </div>
        </section>
    );
};

export default Blog;