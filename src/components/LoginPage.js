import React, { useState } from 'react';
import Parking2 from '../components/images/Parking2.jpg';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      alert('Invalid Credentials');
    }
  };

  // Handle form submission on "Enter" key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Left section with logo */}
      <div className="flex flex-col justify-center items-center bg-sky-100 w-full md:w-1/2 p-6 md:p-0">
        <div className="bg-white rounded-full p-8 bg-gradient-to-b from-black via-blue-900 to-sky-500">
          <img src={Parking2} alt="Parking Logo" className="w-40 h-40 md:w-56 md:h-56" />
        </div>
      </div>

      {/* Right section with login form and gradient background */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gradient-to-b from-black via-blue-900 to-sky-500 p-6 md:p-0">
        <div className="w-full max-w-xs">
          <form 
            className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8"
            onKeyDown={handleKeyDown}
          >
            <div className="mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-5">Login</h2>
              <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                placeholder="Enter password"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
