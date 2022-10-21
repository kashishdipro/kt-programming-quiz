import React from 'react';
import { Link } from 'react-router-dom';

const List = ({route}) => {
    const {path, name} = route;
    return (
        <li className='md:ml-4 ml-0 text-xl text-sky-400 hover:text-sky-600 md:my-0 my-2'><Link to={path}>{name}</Link></li>
    );
};

export default List;