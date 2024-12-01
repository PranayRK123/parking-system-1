import React, { useState } from 'react';

const Categories = () => {
  // Sample data for vehicle categories
  const [categories, setCategories] = useState([
    { id: 1, category: 'Car', rate: 30.0 },
    { id: 2, category: 'Motorcycle', rate: 20.0 },
    { id: 3, category: 'Bicycle', rate: 10.0 },
    { id: 4, category: 'Heavy Vehicle', rate: 50.0 },
  ]);

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center md:text-left">Categories of Vehicle</h1>
      
      {/* Add Category Button */}
      <div className="flex justify-center md:justify-end mb-4">
        <button className="bg-blue-500 text-white px-3 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200 text-sm md:text-base">
          + Add Category
        </button>
      </div>

      {/* Categories Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-xs sm:text-sm md:text-base border border-gray-300">#</th>
              <th className="p-2 text-xs sm:text-sm md:text-base border border-gray-300">Category</th>
              <th className="p-2 text-xs sm:text-sm md:text-base border border-gray-300">Rate per Hour</th>
              <th className="p-2 text-xs sm:text-sm md:text-base border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id} className={index % 2 === 1 ? "bg-gray-100" : ""}>
                <td className="p-2 text-xs sm:text-sm md:text-base border border-gray-300">{index + 1}</td>
                <td className="p-2 text-xs sm:text-sm md:text-base border border-gray-300">{category.category}</td>
                <td className="p-2 text-xs sm:text-sm md:text-base border border-gray-300">{category.rate.toFixed(2)}</td>
                <td className="p-2 text-xs sm:text-sm md:text-base border border-gray-300">
                  <button className="bg-green-500 text-white px-3 py-2 rounded min-w-[80px] mr-2 hover:bg-green-600 transition duration-200 text-xs sm:text-sm md:text-base">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-2 rounded min-w-[80px] hover:bg-red-600 transition duration-200 text-xs sm:text-sm md:text-base">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
