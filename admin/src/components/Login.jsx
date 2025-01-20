import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin/login", { email, password });
      if (response.data.success) {
        setToken(response.data.token)
        toast.success('✅Logged in')
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  };
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='min-w-80 border border-gray-300 bg-gray-100 flex flex-col gap-5 p-5 rounded-md'>
        <h1 className='text-xl text-pink-300 text-center font-bold'>Admin Login</h1>
        <form className='flex flex-col gap-4' onSubmit={onSubmitHandler}>
          <div className='flex flex-col'>
            <p className='text-md font-semibold text-gray-600 '>Email Address</p>
            <input
              className='py-2 outline-none border px-2 rounded-md font-medium'
              type='email'
              placeholder='Ex: example@gmail.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <p className='text-md font-semibold text-gray-600 '>Password</p>
            <input
              className='py-2 outline-none border px-2 rounded-md font-medium'
              type='password'
              placeholder='********'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='bg-pink-300 px-5 py-3 text-white font-bold rounded-md' type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
