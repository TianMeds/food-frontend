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
        <div className="w-6/12 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-bold text-gray-900 text-center">Be a G & R Eatery Member</h5>
            <div className="text-sm font-medium text-gray-500 flex justify-center">
              <span className="mr-1"> Already Registered? </span><a href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login to your account</a>
            </div>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
              <input type="name" name="name" id="name" placeholder="Enter your full name" className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 text-sm" />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-2">
              <div className="flex-grow">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 text-sm" />
              </div>
              <div className="flex-grow">
                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                <input type="password" name="confirmpwd" id="confirmpwd" placeholder="Confirm your password" className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 text-sm" />
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
              </div>
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">
                By signing up you agree to our{' '}
                <button onClick={toggleModal} className="text-blue-700 hover:underline dark:text-blue-500 focus:outline-none">Terms and Conditions</button>{' '}
                and{' '}
                <button onClick={togglePrivacy} className="text-blue-700 hover:underline dark:text-blue-500 focus:outline-none">Privacy Policy</button>{' '}
              </label>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
          </form>
        </div>
      </div>

      {/* Term & Condition Modal */}
      {termModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <span className="absolute top-0 right-0 cursor-pointer" onClick={toggleModal}>&times;</span>
            <div>
              <h2 className="text-lg font-semibold mb-2">Terms and Conditions</h2>
              <p className="text-sm">Your terms and conditions content goes here...</p>
              <button onClick={toggleModal} className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}

      
      {/* Term & Condition Modal */}
      {privacyModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <span className="absolute top-0 right-0 cursor-pointer" onClick={toggleModal}>&times;</span>
            <div>
              <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
              <p className="text-sm">Your terms and conditions content goes here...</p>
              <button onClick={togglePrivacy} className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
