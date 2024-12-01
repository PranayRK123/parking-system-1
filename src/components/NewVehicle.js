import React, { useState } from 'react';

const NewVehicle = () => {
  const [formData, setFormData] = useState({
    vehicleCategory: '',
    area: '',
    vehicleName: '',
    ownerName: '',
    vehicleRegNo: '',
    vehicleDescription: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your save logic here
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded shadow-lg">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">New Vehicle</h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Vehicle Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Vehicle Category</label>
          <select
            name="vehicleCategory"
            value={formData.vehicleCategory}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Please select here</option>
            <option value="Car">Car</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Bicycle">Bicycle</option>
            <option value="Heavy Vehicle">Heavy Vehicle</option>
          </select>
        </div>

        {/* Area */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Area</label>
          <select
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Please select here</option>
            <option value="Area 1">Area 1</option>
            <option value="Area 2">Area 2</option>
            <option value="Area 3">Area 3</option>
          </select>
        </div>

        {/* Vehicle Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Vehicle Name</label>
          <input
            type="text"
            name="vehicleName"
            value={formData.vehicleName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Vehicle Registration No */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Vehicle Registration No.</label>
          <input
            type="text"
            name="vehicleRegNo"
            value={formData.vehicleRegNo}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Owner Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Owner Name</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Vehicle Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Vehicle Description</label>
          <textarea
            name="vehicleDescription"
            value={formData.vehicleDescription}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="3"
          ></textarea>
        </div>

        {/* Save Button */}
        <div className="col-span-1 md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewVehicle;
