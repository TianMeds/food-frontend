import React from 'react'

const Login = () => {
  return (
<>
    <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/fe1eba25fc9bbacf2a5df93931e08d2f331b68ca/GR%20Eatery.svg')" }}>
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl p-8">
        {/* Left Side */}
        <div className="w-1/2 flex flex-col">
          <div className="flex flex-col items-center mb-4 mt-8">
            <img src="https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/274a634a12930720116a85d65cf5930559da76bf/G%26R%20Eatery%20Logo.svg" alt="Logo" className="h-40" /> 
          </div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Login to your account</h2>
          <p className="text-gray-600 text-center">
            Please login to access your cart and book an order
          </p>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center p-8 rounded-r-lg">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <button
                type="submit"
                className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign in to account
              </button>
            </div>
            <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-blue-800"
              >
                Forgot your password?
              </a>
          </form>
          <div className="flex items-center justify-center my-4">
            <span className="border-b border-gray-400 w-full"></span>
            <span className="text-gray-500 mx-4">or</span>
            <span className="border-b border-gray-400 w-full"></span>
          </div>
          <div className="flex flex-col items-center">
          <button
            type="button"
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center mb-4 w-full"
            >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google Logo"
                className="h-5 w-5 mr-2"
            />
            Sign up with Google
          </button>
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="/register" className="text-blue-500 hover:text-blue-800">
                Sign up now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
</>


  )
}

export default Login