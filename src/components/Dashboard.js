import React, { useState } from "react";
import Home from "./Home";
import ParkingSlots from "./ParkingSlots";
import Categories from "./Categories";
import ParkingArea from "./ParkingArea";
import Users from "./Users";
import NewVehicle from "./NewVehicle"; // Import NewVehicle component
import CheckedInCheckOut from "./CheckedInCheckOut"; // Import CheckedVehicles component

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For Parking Slots dropdown

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home />;
      case "ParkingSlots":
        return <ParkingSlots />;
      case "Categories":
        return <Categories />;
      case "ParkingArea":
        return <ParkingArea />;
      case "Users":
        return <Users />;
      case "NewVehicle":
        return <NewVehicle />;
      case "CheckedInCheckOut":
        return <CheckedInCheckOut />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Toggle button for mobile */}
      <button
        className={`md:hidden text-white p-4 absolute left-4 top-4 z-10 ${
          isSidebarOpen ? "text-red-500" : "text-blue-500"
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {/* Hamburger icon (three horizontal lines) */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isSidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block w-full md:w-1/4 bg-gray-800 text-white h-screen`}
      >
        <nav className="p-4">
          <ul>
            <li
              onClick={() => setActivePage("Home")}
              className="py-2 px-4 cursor-pointer hover:bg-gray-600"
            >
              Home
            </li>
            <li
              className="py-2 px-4 cursor-pointer hover:bg-gray-600"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
            >
              Parking Slots
            </li>
            {isDropdownOpen && (
              <ul className="ml-4">
                <li
                  onClick={() => setActivePage("NewVehicle")}
                  className="py-2 px-4 cursor-pointer hover:bg-gray-500"
                >
                  New Vehicle
                </li>
                <li
                  onClick={() => setActivePage("CheckedInCheckOut")}
                  className="py-2 px-4 cursor-pointer hover:bg-gray-500"
                >
                  Available Slots
                </li>
              </ul>
            )}
            <li
              onClick={() => setActivePage("Categories")}
              className="py-2 px-4 cursor-pointer hover:bg-gray-600"
            >
              Categories of Vehicle
            </li>
            <li
              onClick={() => setActivePage("ParkingArea")}
              className="py-2 px-4 cursor-pointer hover:bg-gray-600"
            >
              Parking Area
            </li>
            <li
              onClick={() => setActivePage("Users")}
              className="py-2 px-4 cursor-pointer hover:bg-gray-600"
            >
              Users
            </li>
          </ul>
        </nav>
      </div>

      {/* Content area */}
      <div className="w-full md:w-3/4 p-6 bg-gray-100">{renderPage()}</div>
    </div>
  );
};

export default Dashboard;
