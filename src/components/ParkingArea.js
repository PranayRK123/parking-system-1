import React from "react";

const ParkingArea = () => {
  const parkingData = [
    { id: 1, category: "Car", location: "Car Parking Area", capacity: 10 },
    { id: 2, category: "Motorcycle", location: "Motorcycle Parking Area", capacity: 30 },
    { id: 3, category: "Bicycle", location: "Bicycle Parking Area", capacity: 20 },
    { id: 4, category: "Heavy Vehicle", location: "Heavy Vehicle Parking Area", capacity: 10 },
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-100 h-full">
      <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">
            Parking Area
          </h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 text-sm md:text-base">
            + Add Location
          </button>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-2 md:px-4 py-2">#</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">Category</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">Location</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">Area Capacity</th>
                <th className="border border-gray-300 px-2 md:px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {parkingData.map((parking) => (
                <tr key={parking.id} className="odd:bg-gray-100">
                  <td className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                    {parking.id}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {parking.category}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2">
                    {parking.location}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2 text-center">
                    {parking.capacity}
                  </td>
                  <td className="border border-gray-300 px-2 md:px-4 py-2 flex flex-wrap justify-center gap-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition duration-200 text-sm md:text-base">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200 text-sm md:text-base">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ParkingArea;
