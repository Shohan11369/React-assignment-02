import React from "react";
import { FaClock, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

function NewIncident() {
  return (
    <div className="p-6  max-w-3xl mx-auto mt-6">
      {/* Title */}
      <div className="text-start md:text-center">
        <h1 className="text-3xl font-extrabold mb-2">Let’s get started</h1>

        {/* Subtitle / intro text */}
        <p className="text-gray-700 text-sm md:text-lg mb-6 text-left md:text-center">
          Please provide the details below to create a new incident.
          <br />
          Ensure all fields are accurate before submitting.
        </p>
      </div>
      {/* line with 3 connected dots */}
      <div className="hidden md:flex items-center justify-center mb-8 mt-10">
        <span className="w-3 md:w-5 h-3 md:h-5 bg-blue-500 rounded-full z-10 relative"></span>
        <div className="flex-1 h-1 bg-blue-300"></div>
        <span className="w-3 md:w-5 h-3 md:h-5 bg-green-500 rounded-full z-10 relative"></span>
        <div className="flex-1 h-1 bg-green-300"></div>
        <span className="w-3 md:w-5 h-3 md:h-5 bg-yellow-500 rounded-full z-10 relative"></span>
      </div>

      {/* 3 Boxes with Icon + Text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex flex-col items-center md:items-start bg-blue-100 p-6 rounded-lg max-w-[300px] h-[269px] mx-auto md:mx-0">
          <FaClock className="text-blue-600 text-7xl mb-6" />
          <h2 className="text-md md:text-lg text-gray-700 font-semibold mb-2">
            What type of incident?
          </h2>
          <p className="text-xs md:text-lg text-gray-500 leading-relaxed">
            Choose the category that best describes the incident.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start bg-green-100 p-6 rounded-lg max-w-[400px] h-[269px] mx-auto md:mx-0">
          <FaMapMarkerAlt className="text-green-600 text-7xl mb-6" />
          <h2 className="text-lg text-green-700 font-semibold mb-2">
            Accurate Location
          </h2>
          <p className="text-sm text-green-700 leading-relaxed">
            Pinpoint exact spots for faster response.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start bg-yellow-100 p-6 rounded-lg max-w-[300px] h-[269px] mx-auto md:mx-0">
          <FaDollarSign className="text-yellow-600 text-7xl mb-6" />
          <h2 className="text-lg text-yellow-700 font-semibold mb-2">
            Cost Estimation
          </h2>
          <p className="text-sm text-yellow-700 leading-relaxed">
            Know estimated costs before taking action.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button className=" flex items-center bg-blue-400 px-3 py-2 rounded-full mx-auto font-semibold hover:bg-[#F26922] hover:text-white">
          Get started
        </button>
      </div>
    </div>
  );
}

export default NewIncident;
7;
