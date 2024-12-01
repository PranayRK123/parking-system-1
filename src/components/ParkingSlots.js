import React, { useState } from "react";

const ParkingSlots = () => {
  const [showAvailableSlots, setShowAvailableSlots] = useState(false);
  const [showBookedSlots, setShowBookedSlots] = useState(false);

  const toggleAvailableSlots = () => {
    setShowAvailableSlots(!showAvailableSlots);
  };

  const toggleBookedSlots = () => {
    setShowBookedSlots(!showBookedSlots);
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded shadow-lg">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">New Vehicle</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Your existing form fields */}
      </form>

      {/* Dropdown Sections */}
      <div className="mt-6">
        {/* Available Slots */}
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-700 mb-4"
          onClick={toggleAvailableSlots}
        >
          {showAvailableSlots ? "Hide Available Slots" : "Show Available Slots"}
        </button>
        {showAvailableSlots && (
          <div className="p-4 border rounded bg-gray-50">
            <h2 className="text-lg font-bold">Available Slots</h2>
            <p>Details of available slots will be displayed here.</p>
          </div>
        )}

        {/* Booked Slots */}
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-700 mb-4"
          onClick={toggleBookedSlots}
        >
          {showBookedSlots ? "Hide Booked Slots" : "Show Booked Slots"}
        </button>
        {showBookedSlots && (
          <div className="p-4 border rounded bg-gray-50">
            <h2 className="text-lg font-bold">Booked Slots</h2>
            <p>Details of booked slots will be displayed here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkingSlots;
