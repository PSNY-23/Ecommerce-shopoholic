import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, backendUrl } = useContext(ShopContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name,email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Account created successfully')
        }
        else {
          toast.error(response.data.message)
        }
      }
      else if (currentState === 'Login') {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success('Logged in successfully')
        }
        else {
          toast.error(response.data.message)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  },[token])
  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[92%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type='text'
          className='w-full px-3 py-2 border border-gray-800 outline-none'
          placeholder='Name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <input
        type='email'
        className='w-full px-3 py-2 border border-gray-800 outline-none'
        placeholder='Email'
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type='password'
        className='w-full px-3 py-2 border border-gray-800 outline-none'
        placeholder='Password'
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState === "Login" ? (
          <p onClick={() => setCurrentState("Sign Up")} className='cursor-pointer'>
            Create Account
          </p>
        ) : (
          <p onClick={() => setCurrentState("Login")} className='cursor-pointer'>
            Login here
          </p>
        )}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === "Login" ? "Log In" : "Sign UP"}
      </button>
    </form>
  );
};

export default Login;
