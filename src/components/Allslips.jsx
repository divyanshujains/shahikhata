import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import {Allcustomer} from './Context/CustomerProvider'

const Allslips = () => {

const data = useContext(Allcustomer)


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-6 px-4 flex flex-wrap gap-6">
      {data.map((customer, index) => (
        <Link key={index} to={`/recipt/${customer.id}`} className="bg-white h-fit rounded-xl shadow-md p-4 w-full max-w-xs hover:shadow-blue-300 transition-all duration-300">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-gray-400">ID: {customer.id}</span>
            <button className="px-3 py-1 text-xs bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded font-semibold transition">
              Rate
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center bg-blue-50 rounded p-2">
              <span className="font-medium text-blue-700">Name:</span>
              <span className="text-gray-800 text-right">{customer.name}</span>
            </div>

            <div className="flex justify-between items-center bg-blue-50 rounded p-2">
              <span className="font-medium text-blue-700">Email:</span>
              <span className="text-gray-800 text-right break-all">{customer.email}</span>
            </div>

            <div className="flex justify-between items-center bg-blue-50 rounded p-2">
              <span className="font-medium text-blue-700">Phone:</span>
              <span className="text-gray-800">{customer.contact}</span>
            </div>

            <div className="bg-blue-50 rounded p-2">
              <span className="block font-medium  text-blue-700 mb-1">Address:</span>
              <span className="text-gray-800 text-sm break-words">{customer.address}</span>
            </div>

            <div className="bg-blue-50 rounded p-2">
              <span className="block font-medium text-blue-700 mb-1">Description:</span>
              <p className="text-gray-800 text-sm">{customer.description}</p>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button className="px-4 py-1.5 text-xs bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded font-semibold transition">
              Edit
            </button>
            <button className="px-4 py-1.5 text-xs bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded font-semibold transition">
              Delete
            </button>
            <button className="px-4 py-1.5 text-xs bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white rounded font-semibold transition">
              +
            </button>
            <button className="px-4 py-1.5 text-xs bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white rounded font-semibold transition">
              -
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Allslips;
