import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form"
import { GlobalData } from '../_app';
import { useRouter } from 'next/router';

const Login = () => {
  const { user, setUser } = useContext(GlobalData)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const onSubmit = async (data) => {
    try {
      const loginUser = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      const userData = await loginUser.json()
      if (userData.name) { setUser(userData) }

    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (user) {
      router.push("/")

    }

  }, [user])
  return (
    <div className="flex justify-center items-center sm:p-8 pt-4 ">

      <div className="bg-blue-100 shadow-md rounded-md p-8 sm:w-96 w-full">

        <h2 className="text-2xl font-bold mb-6 text-center">Login </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block mb-2">
              User name:
            </label>
            <input
              type="text"
              id="username"
              className=" rounded-md px-3 py-2 w-full border-current  outline-none"
              {...register("username")}
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
                {...register("password")}
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
          > Don’t have an account yet?<span className='text-blue-500 mx-1 font-bold'>Create an account</span>
          </Link>
        </div>
        <div className='w-full text-center mt-4'>
          <Link href="/reset-password"
            type="button"
            className=" text-blue "
          >Forgot password ?<span className='text-red-500 mx-1 font-bold'>reset</span>
          </Link>
        </div>
      </div >
    </div >
  );
};

export default Login;
