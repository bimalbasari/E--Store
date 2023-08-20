import Link from 'next/link';
import { useState } from 'react';
import { useForm } from "react-hook-form"

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false)
  // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;


  return (
    <div className="flex justify-center items-center sm:p-8 pt-4 ">

      <div className="bg-blue-100 shadow-md rounded-md p-8 sm:w-96 w-full">

        <h2 className="text-2xl font-bold mb-6 text-center">Login </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className=" rounded-md px-3 py-2 w-full border-current  outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className=" rounded-md px-3 py-2 w-full border-current  outline-none"
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600"
          >
            Login
          </button>

        </form >
        <div className='w-full text-center mt-4'>
          <Link href="/register"
            type="button"
            className=" text-blue "
          >New user?<span className='text-blue-500 mx-1 font-bold'>Create an account</span>
          </Link>
        </div>

      </div >
    </div >
  );
};

export default Login;
