import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const {title,image_url,details,category_id}= news

    console.log(news)
    return (
        <div className='space-y-5'>
           
            <img className='w-full h-[350px] object-cover' src={image_url} alt="" />
            <h1 className='text-xl font-bold'>{title}</h1>
            <p>{details}</p>
            <Link className='btn btn-secondary' to={`/`}>click hare</Link>
        </div>
    );
};

export default NewsDetailsCard;