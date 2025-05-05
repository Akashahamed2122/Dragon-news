import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const [nameError, setNameError]= useState('')
  const navigate = useNavigate()


  const {createUser,setUser, updateUser}= use(AuthContext)

  const handleRegister = (e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    if(nameError.length<5){
      setNameError('name should be 5 charictor')
      return

    }else{
      setNameError('')
    }

    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name,photoUrl,email,password)

    createUser(email, password)
      .then(result =>{
        const user = result.user
        // console.log(user)
        updateUser({displayName: name, photoURL: photoUrl}).then(()=>{
          setUser({...user,displayName: name, photoURL: photoUrl})
          navigate('/')

        }) 
        .catch(error=>{
          console.log(error);
          setUser(user)
  
        })
        
      })
    
    

  }




    return (
        <div className='flex justify-center min-h-screen items-center'>
 
 
        <div className="card bg-base-100 w-full  max-w-sm shrink-0 py-5 shadow-2xl">
          <div className="card-body">
            <h2 className='text-center font-bold'>Register your account</h2>
            <form onSubmit={handleRegister} className="fieldset">
                {/* name */}
            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Your Name" required />

            {nameError && <p className='text-red-500 font-bold'> {nameError} </p>}


            {/* photo url */}
            <label className="label">Photo Url</label>
            <input type="text" name='photoUrl' className="input" placeholder="Photo url" required />
                {/* email */}
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" required />
              {/* password */}
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" required />
            
              
              <button className="btn btn-neutral mt-4">Register</button>
              <p className='text-center pt-5'>Dont’t Have An Account  <Link className='text-red-600 font-bold' to="/auth/login">? Login</Link> </p>
            </form>
          </div>
        </div>
    
            </div>
    );
};

export default Register;