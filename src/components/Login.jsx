import React from 'react'

const Login = () => {
  return (
<>
    <div className="bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: "url('https://raw.githubusercontent.com/TianMeds/image--stocks-for-coding/fe1eba25fc9bbacf2a5df93931e08d2f331b68ca/GR%20Eatery.svg')" }}>
        <div className="w-6/12 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" action="#">
                <h5 className="text-2xl font-bold text-gray-900 text-center">Sign in to G & R Eatery </h5>
                <div className="text-sm font-medium text-gray-600 flex justify-center">
                    <span className='mr-1'>New User?</span> <a href="/register" className="text-black-700 hover:underline dark:text-blue-500"> Create account</a>
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                <div className="flex items-start">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
                    </div>
                    <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot Password?</a>
                </div>
                <div className="flex items-center justify-center my-4">
                    <div className="border-b border-gray-400 w-1/4"></div>
                    <span className="mx-2 text-gray-600 text-sm">Or login with</span>
                    <div className="border-b border-gray-400 w-1/4"></div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" fill='white'>
                            <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
                        </svg>
                        <span className="ml-2 text-sm">Google</span>
                    </button>

                    <button className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" fill="white">
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                        </svg>
                        <span className="ml-2 text-sm">Facebook</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</>


  )
}

export default Login