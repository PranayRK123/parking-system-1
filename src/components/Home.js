import React from 'react';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome back, Administrator!</h1>
      
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-yellow-400 p-4 md:p-6 rounded shadow-lg flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">2</h2>
            <p className="text-sm md:text-base">Total Parked Vehicle</p>
          </div>
          <div>
            <i className="fas fa-car text-3xl md:text-4xl"></i>
          </div>
        </div>

        <div className="bg-green-500 p-4 md:p-6 rounded shadow-lg flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">2</h2>
            <p className="text-sm md:text-base">Total Checked-Out Vehicle</p>
          </div>
          <div>
            <i className="fas fa-car text-3xl md:text-4xl"></i>
          </div>
        </div>
      </div>

      {/* Parking Area Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-lg">
          <thead>
            <tr>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">Parking Area</th>
              <th className="px-4 md:px-6 py-3 border-b-2 border-gray-300 text-left text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider">Available Slots</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 md:px-6 py-4 border-b border-gray-200 text-xs md:text-base">Bicycle Parking Area</td>
              <td className="px-4 md:px-6 py-4 border-b border-gray-200 text-xs md:text-base">20</td>
            </tr>
            <tr>
              <td className="px-4 md:px-6 py-4 border-b border-gray-200 text-xs md:text-base">Car Parking Area</td>
              <td className="px-4 md:px-6 py-4 border-b border-gray-200 text-xs md:text-base">9</td>
            </tr>
            <tr>
              <td className="px-4 md:px-6 py-4 border-b border-gray-200 text-xs md:text-base">Heavy Vehicle Parking Area</td>
              <td className="px-4 md:px-6 py-4 border-b border-gray-200 text-xs md:text-base">10</td>
            </tr>
            <tr>
              <td className="px-4 md:px-6 py-4 border-b border-gray-200 text-xs md:text-base">Motorcycle Parking Area</td>
              <td className="px-4 md:px-6 py-4 border-b border-gray-200 text-xs md:text-base">28</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
