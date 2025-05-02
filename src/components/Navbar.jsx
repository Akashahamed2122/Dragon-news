import React from 'react';
import { NavLink } from 'react-router';
import user from "../../src/assets/user.png"

const Navbar = () => {
    return (
        <div className='grid grid-cols-9 py-8'>
            <div className='col-span-4'></div>
            <div className='nav col-span-3  flex gap-5 text-accent'>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/carrier">Carrier</NavLink>
            </div>
            <div className='login flex gap-8 justify-end col-span-2 px-5 '>
         
               <img src={user} alt="" />
               <button className='btn btn-primary px-10'>Login</button>
          
            </div>
        </div>
    );
};

export default Navbar;