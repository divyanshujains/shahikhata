import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => {
  return (
    <div className='bg-[#E7E9FF]'>
        <nav className="bg-gradient-to-r from-blue-900 rounded-full via-blue-700 to-blue-500 px-8 py-6 mx-auto max-w-4xl">
            <div className="container mx-auto flex items-center rounded-[30px] justify-between bg-opacity-90 px-6">
                <div className="flex space-x-6 items-center">
                    <Link to="/" className="text-white text-lg font-bold hover:text-blue-200 transition-colors">Home</Link>
                    <Link to="/Customer" className="text-white text-lg font-bold hover:text-blue-200 transition-colors">Customer</Link>
                    <Link to="Products" className="text-white text-lg font-bold hover:text-blue-200 transition-colors">Product</Link>
                    <Link to="/Sales" className="text-white text-lg font-bold hover:text-blue-200 transition-colors">Sales</Link>
                </div>
                <button className="text-white font-bold hover:text-blue-200 transition-colors flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                    </svg>
                    Logout
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
