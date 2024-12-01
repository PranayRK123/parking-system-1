import React, { useState } from 'react';

const CheckedVehicles = () => {
  const [data, setData] = useState([
    { id: 1, date: 'Mar 31,2023', referenceNo: '7591228929', owner: 'aadi', status: 'Checked-Out' },
    { id: 2, date: 'Mar 31,2023', referenceNo: '8284874289', owner: 'Pranay', status: 'Checked-In' },
    { id: 3, date: 'Mar 31,2023', referenceNo: '3867653343', owner: 'Aboozar', status: 'Checked-In' },
    { id: 4, date: 'Mar 31,2023', referenceNo: '8166076214', owner: 'Kabir Khan', status: 'Checked-Out' },
  ]);

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Check-In/Check-Out List</h1>

      {/* Search & Table Controls */}
      <div className="overflow-x-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          <div className="flex items-center">
            <label htmlFor="entries" className="mr-2 text-sm md:text-base">Show</label>
            <select
              id="entries"
              className="border p-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span className="ml-2 text-sm md:text-base">entries</span>
          </div>
          <div>
            <label htmlFor="search" className="mr-2 text-sm md:text-base">Search:</label>
            <input
              type="text"
              id="search"
              className="border p-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm md:text-base"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Table */}
        <table className="table-auto w-full text-left border-collapse border border-gray-300 text-sm md:text-base">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-300">#</th>
              <th className="p-2 border border-gray-300">Date</th>
              <th className="p-2 border border-gray-300">Parking Reference No.</th>
              <th className="p-2 border border-gray-300">Owner</th>
              <th className="p-2 border border-gray-300">Status</th>
              <th className="p-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={index % 2 === 1 ? 'bg-gray-100' : ''}>
                <td className="p-2 border border-gray-300">{index + 1}</td>
                <td className="p-2 border border-gray-300">{item.date}</td>
                <td className="p-2 border border-gray-300">{item.referenceNo}</td>
                <td className="p-2 border border-gray-300">{item.owner}</td>
                <td className="p-2 border border-gray-300">
                  <span
                    className={`px-2 py-1 rounded-full text-white ${
                      item.status === 'Checked-In' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-2 border border-gray-300">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded min-w-[60px] mr-2 hover:bg-blue-600 transition duration-200 text-sm md:text-base">
                    View
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded min-w-[60px] hover:bg-red-600 transition duration-200 text-sm md:text-base">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          <div className="text-sm md:text-base">
            Showing 1 to {data.length} of {data.length} entries
          </div>
          <div className="flex">
            <button className="bg-gray-200 px-3 py-1 rounded-l text-sm md:text-base">Previous</button>
            <button className="bg-gray-200 px-3 py-1 rounded-r text-sm md:text-base">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckedVehicles;
