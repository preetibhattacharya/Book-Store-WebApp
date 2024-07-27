import React, { useContext, useState } from 'react';
//import './Signup.css';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import {AuthContext} from '../Authenticattion/AuthProvider';

  

const Login = () => {
  const {login,loginwithGoogle} = useContext(AuthContext)
  const [error,setError]=useState("")

  const location=useLocation()
  const navigate = useNavigate()

  const from=location.state?.from?.pathname || "/"

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email,password).then((userCredential)=>{
      const user= userCredential.user;
      alert("Login successfull!")
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage=error.message
      setError(errorMessage)
  })
  };

  const handleRegister=()=>{
    loginwithGoogle().then((result)=>{
      const user=result.user
      alert('log in successfull')
      navigate(from,{replace:true})
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage=error.message
      setError(errorMessage)
  })
  }
  return (
    <form onSubmit={handleLogin} className="container max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <div className="header text-center">
        <div className="text font-bold text-5xl">Login</div>
        <div className="underline w-24 h-1 bg-indigo-500 mx-auto mt-2"></div>
      </div>
      <div className="inputs mt-6">
        <div className="input flex items-center mb-4">
          <img src="src/assets/email.png" alt="" className="w-6 h-6 mr-2" />
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="inputs">
        <div className="input flex items-center mb-4">
          <img src="src/assets/password.png" alt="" className="w-6 h-6 mr-2" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="forget-password text-right mb-4">
        <span className="text-indigo-500 cursor-pointer">Forget Password? Click here</span>
      </div>
      <div className="submit-container mb-4">
        <button type="submit" className="submit bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
        <p className="text-red-500">{error?"Email or Password is not correct":""}</p>
        <div className="submit mt-2">
          don't have an account?
          <Link to="/sign-up" className="text-indigo-500 hover:underline"> Sign-up </Link>
        </div>
      </div>
      <button onClick={handleRegister} className="google flex items-center justify-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        <FaGoogle className="w-4 mr-2" /> Login With Google
      </button>
    </form>
  )
}

export default Login