import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import loginImage from '../assets/img/30.jpg'; // Ensure this path is correct

const AdminLogin = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'admin@findmyspot.com' && password === '12345678') {
      setIsLoggedIn(true);
      navigate('/admin-dashboard');
    } else {
      setErrorMessage('Invalid Credentials');
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="flex w-full min-h-[90vh] bg-white rounded-lg shadow-lg overflow-hidden mx-4">
          <div className="w-1/2 p-8 flex-grow flex items-center justify-center">
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-4 text-center text-blue-500">
                LOG IN
              </h2>
              {errorMessage && (
                <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                      placeholder="Enter your password"
                    />
                    <div
                      className="absolute top-0 right-0 mt-2 mr-3 cursor-pointer"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {isPasswordVisible ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 20H6a1 1 0 01-1-1v-3a1 1 0 011-1h4c1.654 0 3 1.346 3 3v1a1 1 0 01-1 1z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline animate__animated animate__bounce"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full relative">
            <div
              className="absolute rounded-lg shadow-lg overflow-hidden inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${loginImage})`,
                opacity: 0.6,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
