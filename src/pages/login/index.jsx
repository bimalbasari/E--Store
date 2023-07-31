import Link from 'next/link';
import { useState } from 'react';
import { MdWarning } from "react-icons/md"
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null)

    // Validate email format using regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format');
      return;
    }

    // Validate password format using regex pattern
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        `Invalid  password format `
      );
      return;
    }

    // Perform login logic here
    const userData = {
      email,
      password
    }
    try {

      if (LogUser) {
        const type = 'buffer';
        const { token, user } = LogUser.data;
        const { firstName, lastName, email, mobile, picture } = user;

        // Convert the array of image data into a Uint8Array
        const uint8Array = new Uint8Array(picture.data);

        // Create a Blob from the Uint8Array
        const blob = new Blob([uint8Array], { type });

        // Create an object URL for the Blob
        const objectURL = URL.createObjectURL(blob);

        const newUser = {
          firstName, lastName, email, mobile, picture: objectURL, token
        }

      }

    } catch (error) {
      setError(error.message)
    }

  };

  return (
    <div className="flex justify-center items-center sm:p-8 pt-4 ">
      <div className="bg-blue-100 shadow-md rounded-md p-8 sm:w-96 w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login </h2>
        {error &&
          <div className="flex items-center bg-pink-500 text-white text-sm font-bold px-4 py-3" role="alert">
            <MdWarning />
            <p>{error}</p>
          </div>}
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block mb-2" ="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className=" rounded-md px-3 py-2 w-full border-current  outline-none"
              value={email}
              onChange={handleEmailChange}
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
                className=" rounded-md px-3 py-2 w-full border-current  outline-none"
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

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600"
          >
            Login
          </button>

        </form>
        <div className='w-full text-center mt-4'>
          <Link href="/register"
            type="button"
            className=" text-blue "
          >New user?<span className='text-blue-500 mx-1 font-bold'>Create an account</span>
          </Link> </div>

      </div>
    </div>
  );
};

export default Login;
