import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import usercicon from "../../src/assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user,LogOut}= use(AuthContext)
    const handleLogOut= ()=>{
        
        LogOut().then(result=>{
            alert('log out succesfully')
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className='grid grid-cols-9 py-8'>
            <div className='col-span-4'>{user && user.email }  </div>
            <div className='nav col-span-3  flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/carrier">Carrier</NavLink>
            </div>
            <div className='login flex gap-8 justify-end col-span-2 px-5 '>
         
               <img className='w-12 rounded-full' src={user? user.photoURL: usercicon} alt="icons" />

               {
                user? <Link onClick={handleLogOut} className='btn btn-primary px-10'>Logout</Link>:<Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
               }
               
          
            </div>
        </div>
    );
};

export default Navbar;