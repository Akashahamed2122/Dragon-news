import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

  const [error, setError]= useState('')


  const {signIn}= use(AuthContext)
  const location = useLocation()
  console.log(location)

  const navigate= useNavigate()



  const handleLogin= (e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)

    signIn(email,password)
      .then(result=>{
        console.log(result)
        navigate(`${location.state? location.state: "/"}`)
        
      })
      .catch(error=>{
        const errorcode = error.code;
        setError(errorcode)
      })
  }



    return (
        <div className='flex justify-center min-h-screen items-center'>
 
 
    <div className="card bg-base-100 w-full  max-w-sm shrink-0 py-5 shadow-2xl">
      <div className="card-body">
        <h2 className='text-center font-bold'>Login your account</h2>
        <form onSubmit={handleLogin} className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required />
          <div><a className="link link-hover">Forgot password?</a></div>
          {error && <p className='text-red-500 font-bold'> {error} </p>}
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-center pt-5'>Dont’t Have An Account  <Link className='text-red-600 font-bold' to="/auth/register">? Register</Link> </p>
        </form>
      </div>
    </div>

        </div>
    );
};

export default Login;