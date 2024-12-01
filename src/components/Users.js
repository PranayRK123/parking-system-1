import React, { useState } from 'react';

const Users = () => {
  // Sample data for users
  const [users, setUsers] = useState([
    { id: 1, name: 'Administrator', username: 'admin' }
  ]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Users Page</h1>
      
      {/* New User Button */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="entries" className="mr-2">Show</label>
          <select id="entries" className="p-1 border border-gray-300 rounded">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <span className="ml-2">entries</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200">
          + New User
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm">Showing 1 to {users.length} of {users.length} entries</span>
        <input 
          type="text" 
          placeholder="Search" 
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border border-gray-300">#</th>
              <th className="p-2 border border-gray-300">Name</th>
              <th className="p-2 border border-gray-300">Username</th>
              <th className="p-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={index % 2 === 1 ? "bg-gray-100" : ""}>
                <td className="p-2 border border-gray-300">{index + 1}</td>
                <td className="p-2 border border-gray-300">{user.name}</td>
                <td className="p-2 border border-gray-300">{user.username}</td>
                <td className="p-2 border border-gray-300">
                  <div className="relative inline-block text-left">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200">
                      Action
                    </button>
                    {/* Dropdown for action buttons (Edit/Delete) can be added here */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm">Showing 1 to {users.length} of {users.length} entries</span>
        <div className="flex items-center">
          <button className="px-2 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100">Previous</button>
          <button className="px-2 py-1 border border-gray-300 hover:bg-gray-100">1</button>
          <button className="px-2 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Users;
