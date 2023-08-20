import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { MdWarning } from "react-icons/md"

const Register = ({ setAccount }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobilePattern = /^\d{10}$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  // setError(
  //   `Password must contain at least 8 characters,
  //   including one uppercase letter,
  //   one lowercase letter, one number, 
  //   and one special character`
  // );
  const [showPassword, setShowPassword] = useState(false);
  const [picture, setPicture] = useState(null);
  const [previewURL, setPreviewURL] = useState('');


  const handlePictureChange = (e) => {
    let selectedPicture = e.target.files[0]
    setPicture(selectedPicture);

    if (selectedPicture) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewURL(reader.result);
      };
      reader.readAsDataURL(selectedPicture);
    }
  };




  return (
    <div className="flex justify-center items-center sm:p-8 pt-4 ">
      < div className="bg-blue-100 shadow-md rounded-md p-8 w-full" >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Register</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4 flex items-center justify-center">
            <label className="h-48 w-48 cursor-pointerflex items-center justify-center rounded-full object-cover overflow-hidden">
              <input type="file" className="hidden " onChange={handlePictureChange} />
              <Image src={previewURL ? previewURL : "/images/user_dummy.png"} width={100} height={100} alt="user" className='w-full h-full' />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2" >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className=" rounded-md px-3 py-2 w-full  outline-none"
               
              />
            </div>
            <div>
              <label className="block mb-2" >
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                className=" rounded-md px-3 py-2 w-full  outline-none"
                
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2" >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className=" rounded-md px-3 py-2 w-full  outline-none"
              
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobile"
              className=" rounded-md px-3 py-2 w-full  outline-none"
              
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
                className=" rounded-md px-3 py-2 w-full  outline-none"
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
          <div className="mb-4">
            <label className="block mb-2">
              Confirm Password:
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              className=" rounded-md px-3 py-2 w-full  outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <div className='w-full text-center mt-4'>
          <Link href="login" className=" text-blue "
          > Existing User? <span className='text-blue-500 mx-1 font-bold'>Log in</span>
          </Link>
        </div>

      </div >
    </div >

  );
};

export default Register;
