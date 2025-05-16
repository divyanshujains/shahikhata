import React, { useContext, useState } from 'react';
import { Allcustomer } from './Context/CustomerProvider';

const Customer = () => {
  const data = useContext(Allcustomer);
   const [popup, setpopup] = useState(false);
   

  return (
    
    <div>
      <div className="w-full min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Customer List</h2>
        <div className="space-y-4">
          {data && data.length > 0 ? (
            data.map((customer, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-white shadow rounded-lg px-6 py-4"
              >
                <div className="flex flex-row gap-8 flex-wrap w-full">
                  <div>
                    <span className="font-semibold text-blue-700">Name: </span>
                    <span className="text-gray-800">{customer.name}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Email: </span>
                    <span className="text-gray-800">{customer.email}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Description: </span>
                    <span className="text-gray-800">{customer.description}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-blue-700">Address: </span>
                    <span className="text-gray-800">{customer.address}</span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => setpopup(true)}
                    className="px-8 py-1.5 text-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded font-semibold transition"
                  >
                    Edit
                  </button>
                  <button className="px-8 py-1.5 text-md bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded font-semibold transition">
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No customers found.</p>
          )}
        </div>
      </div>

      {popup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-[1px]">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-blue-700">Edit Customer</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="editName" className="block text-blue-700 font-semibold mb-1">Name</label>
                <input id="editName" type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter name" />
              </div>
              <div className="mb-4">
                <label htmlFor="editAddress" className="block text-blue-700 font-semibold mb-1">Address</label>
                <input id="editAddress" type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter address" />
              </div>
              <div className="mb-4">
                <label htmlFor="editDescription" className="block text-blue-700 font-semibold mb-1">Description</label>
                <input id="editDescription" type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter description" />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setpopup(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customer;
