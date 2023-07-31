import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdWarning } from "react-icons/md"

const Signup = ({ setAccount }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [picture, setPicture] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [create, setCreate] = useState(null)

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
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
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    // Validate email format using regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Validate mobile format using regex pattern
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobile)) {
      setError('Invalid mobile number');
      return;
    }

    // Validate password format using regex pattern
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        `Password must contain at least 8 characters,
        including one uppercase letter,
        one lowercase letter, one number, 
        and one special character`
      );
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Password and confirm password do not match');
      return;
    }

    const formData = { firstName, lastName, email, mobile, password, picture }
    try {
      const userCreate = await createAccount(formData)
      if (userCreate) {
        setCreate(userCreate.data.message)
        setAccount(true)
      }

    } catch (error) {
      setError(error.response.data.message);
    }
  };



  return (
    <div className="flex justify-center items-center sm:p-8 pt-4 ">

      < div className="bg-blue-100 shadow-md rounded-md p-8 w-full" >

        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Register</h2>

        {error && <div className="flex items-center bg-red-500 text-white text-sm font-bold px-4 py-3" role="alert">
          <MdWarning />
          <p>{error}</p>
        </div>}


        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center justify-center  ">
            <label className="h-48 w-48 cursor-pointerflex items-center justify-center rounded-full object-cover overflow-hidden">
              <input type="file" className="hidden " onChange={handlePictureChange} />
              <Image src={previewURL ? previewURL : "/images/user_dummy.png"} width={100} height={100} alt="user" className='w-full h-full' />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2" ="firstName">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                className=" rounded-md px-3 py-2 w-full  outline-none"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2" ="lastName">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                className=" rounded-md px-3 py-2 w-full  outline-none"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2" ="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className=" rounded-md px-3 py-2 w-full  outline-none"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" ="mobile">
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobile"
              className=" rounded-md px-3 py-2 w-full  outline-none"
              value={mobile}
              onChange={handleMobileChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2" ="password">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className=" rounded-md px-3 py-2 w-full  outline-none"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                onClick={handleTogglePassword}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2" ="confirmPassword">
              Confirm Password:
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="confirmPassword"
              className=" rounded-md px-3 py-2 w-full  outline-none"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
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

export default Signup;
