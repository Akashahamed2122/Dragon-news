import React, { use } from 'react';
import { NavLink } from 'react-router';


const categorPromise = fetch('categories.json').then(res=> res.json())

const Categories = () => {

    const categories = use(categorPromise)

    
    return (
        <div>
            <h1>All Categories {categories.length} </h1>
            <div className='grid grid-cols-1 gap-5 mt-5'>
                {
                    categories.map(category=> <NavLink to={`/category/${category.id}`} className={'btn text-accent font-semibold bg-transparent border-none hover: bg-base-200'} key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;