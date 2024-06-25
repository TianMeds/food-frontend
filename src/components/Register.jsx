'use client'

import { useState } from 'react';

const Register = () => {
  // State to control modal visibility
  const [termModal, setTermModal] = useState(false);
  const [privacyModal, setPrivacyModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setTermModal(!termModal);
  };

  const togglePrivacy = () => {
    setPrivacyModal(!privacyModal);
  }

  return (
    <>
      <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/fe1eba25fc9bbacf2a5df93931e08d2f331b68ca/GR%20Eatery.svg')" }}>
        <div className="w-6/12 md:w-8/12 lg:w-9/12 p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-8 flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="md:w-1/2 p-4">
            <h5 className="text-xl font-bold text-gray-900 text-center mb-4">Be a G & R Eatery Member</h5>
            <div className="text-sm font-medium text-gray-500 flex justify-center mb-4">
              <span className="mr-1">Already Registered?</span>
              <a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login to your account</a>
            </div>
            <form className="space-y-4" action="#">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
                <input type="text" name="name" id="name" placeholder="Enter your full name" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div>
                <label htmlFor="confirmpwd" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                <input type="password" name="confirmpwd" id="confirmpwd" placeholder="Confirm your password" className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              </div>
              <div className="flex items-start mb-4">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">
                  By signing up you agree to our{' '}
                  <button type="button" onClick={toggleModal} className="text-blue-700 hover:underline dark:text-blue-500 focus:outline-none">Terms and Conditions</button>{' '}
                  and{' '}
                  <button type="button" onClick={togglePrivacy} className="text-blue-700 hover:underline dark:text-blue-500 focus:outline-none">Privacy Policy</button>{' '}
                </label>
              </div>
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create account</button>
            </form>
          </div>
          {/* Text Section */}
          <div className="w-1/2 flex flex-col">
          <div className="flex flex-col items-center mb-4 mt-8">
            <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/274a634a12930720116a85d65cf5930559da76bf/G%26R%20Eatery%20Logo.svg" alt="Logo" className="h-40" /> 
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Be a G & R Eatery Member</h2>
          <p className="text-gray-600 text-center mx-7">
            Please register for you to book an order and eliminate the hassle of waiting in line
          </p>
        </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      {termModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg relative">
            <span className="absolute top-0 right-0 cursor-pointer text-gray-500 hover:text-gray-700" onClick={toggleModal}>&times;</span>
            <div>
              <h2 className="text-lg font-semibold mb-2">Terms and Conditions</h2>
              <p className="text-sm">Your terms and conditions content goes here...</p>
              <button onClick={toggleModal} className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {privacyModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg relative">
            <span className="absolute top-0 right-0 cursor-pointer text-gray-500 hover:text-gray-700" onClick={togglePrivacy}>&times;</span>
            <div>
              <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
              <p className="text-sm">Your privacy policy content goes here...</p>
              <button onClick={togglePrivacy} className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
