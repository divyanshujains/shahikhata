import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 px-12 py-10">
            <div className="container mx-auto flex items-center rounded-b-[20px] justify-between">
                <div className="flex space-x-8">
                    <Link to="/" className="text-white text-xl font-semibold  ">Home</Link>
                    <Link to="/Customer" className="text-white text-xl font-semibold ">Customer</Link>
                    <Link to="Products" className="text-white text-xl font-semibold  ">Product</Link>
                    <Link to="/Sales" className="text-white text-xl font-semibold  ">Sales</Link>
                </div>
                <button className="text-white font-semibold  ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
