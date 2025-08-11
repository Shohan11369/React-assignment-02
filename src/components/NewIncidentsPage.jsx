import React from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  FaTimes,
  FaHome,
  FaFireAlt,
  FaCarCrash,
  FaWater,
  FaBolt,
  FaSnowflake,
  FaWind,
  FaSeedling,
  FaVirus,
  FaMountain,
  FaCloudShowersHeavy,
  FaExclamationTriangle,
  FaSun,
  FaTemperatureLow,
  FaMeteor,
} from "react-icons/fa";

import { WiRaindrop } from "react-icons/wi";

function NewIncidentsPage() {
  const navigate = useNavigate();

  const incidents = [
    {
      icon: <FaMountain className="text-blue-700 text-5xl mb-3" />,
      label: "Avalanche",
      bg: "bg-blue-100",
      hover: "hover:bg-blue-200",
      textColor: "text-blue-700",
    },
    {
      icon: <FaVirus className="text-green-700 text-5xl mb-3" />,
      label: "Biological",
      bg: "bg-green-100",
      hover: "hover:bg-green-200",
      textColor: "text-green-700",
    },
    {
      icon: <FaSnowflake className="text-blue-400 text-5xl mb-3" />,
      label: "Blizzard",
      bg: "bg-blue-100",
      hover: "hover:bg-blue-200",
      textColor: "text-blue-700",
    },
    {
      icon: <FaTemperatureLow className="text-blue-600 text-5xl mb-3" />,
      label: "Cold/Freezing",
      bg: "bg-blue-100",
      hover: "hover:bg-blue-200",
      textColor: "text-blue-700",
    },
    {
      icon: <FaSeedling className="text-yellow-700 text-5xl mb-3" />,
      label: "Drought",
      bg: "bg-yellow-100",
      hover: "hover:bg-yellow-200",
      textColor: "text-yellow-700",
    },
    {
      icon: <FaMeteor className="text-gray-700 text-5xl mb-3" />,
      label: "Earthquake",
      bg: "bg-gray-100",
      hover: "hover:bg-gray-200",
      textColor: "text-gray-700",
    },
    {
      icon: <FaWater className="text-blue-700 text-5xl mb-3" />,
      label: "Flooding",
      bg: "bg-blue-200",
      hover: "hover:bg-blue-300",
      textColor: "text-blue-700",
    },
    {
      icon: <FaSun className="text-yellow-600 text-5xl mb-3" />,
      label: "Heat Wave",
      bg: "bg-yellow-100",
      hover: "hover:bg-yellow-200",
      textColor: "text-yellow-700",
    },
    {
      icon: <FaCloudShowersHeavy className="text-blue-500 text-5xl mb-3" />,
      label: "Hail",
      bg: "bg-blue-100",
      hover: "hover:bg-blue-200",
      textColor: "text-blue-700",
    },
    {
      icon: <FaBolt className="text-yellow-600 text-5xl mb-3" />,
      label: "Lightning",
      bg: "bg-yellow-100",
      hover: "hover:bg-yellow-200",
      textColor: "text-yellow-700",
    },
    {
      icon: <FaExclamationTriangle className="text-gray-800 text-5xl mb-3" />,
      label: "Man Made",
      bg: "bg-gray-100",
      hover: "hover:bg-gray-200",
      textColor: "text-gray-800",
    },
    {
      icon: <FaMountain className="text-yellow-700 text-5xl mb-3" />,
      label: "Mudslide",
      bg: "bg-yellow-100",
      hover: "hover:bg-yellow-200",
      textColor: "text-yellow-700",
    },
    {
      icon: <FaCloudShowersHeavy className="text-gray-700 text-5xl mb-3" />,
      label: "Severe Storm",
      bg: "bg-gray-100",
      hover: "hover:bg-gray-200",
      textColor: "text-gray-700",
    },
    {
      icon: <FaWind className="text-gray-600 text-5xl mb-3" />,
      label: "Strong Wind",
      bg: "bg-gray-100",
      hover: "hover:bg-gray-200",
      textColor: "text-gray-600",
    },

    {
      icon: <FaWind className="text-gray-800 text-5xl mb-3" />,
      label: "Tornado",
      bg: "bg-gray-100",
      hover: "hover:bg-gray-200",
      textColor: "text-gray-800",
    },
    {
      icon: <WiRaindrop className="text-blue-700 text-5xl mb-3" />,
      label: "Tsunami",
      bg: "bg-blue-100",
      hover: "hover:bg-blue-200",
      textColor: "text-blue-700",
    },

    {
      icon: <FaMountain className="text-red-600 text-5xl mb-3" />,
      label: "Volcanic Eruption",
      bg: "bg-red-100",
      hover: "hover:bg-red-200",
      textColor: "text-red-700",
    },

    {
      icon: <FaFireAlt className="text-red-600 text-5xl mb-3" />,
      label: "Wildfire",
      bg: "bg-red-100",
      hover: "hover:bg-red-200",
      textColor: "text-red-700",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 mt-6">
      {/* Top bar */}
      <div>
        <div className="flex items-center justify-start space-x-4 mb-4">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-gray-900 text-2xl"
            aria-label="Close"
          >
            <FaTimes />
          </button>

          <nav className="flex space-x-6 text-gray-700 font-semibold text-sm md:text-base">
            <Link
              to="/"
              className="hover:text-blue-600 flex items-center gap-1"
            >
              <FaHome /> Home
            </Link>
            <Link to="/incidents" className="hover:text-blue-600">
              Incidents
            </Link>
          </nav>
        </div>
        <h2 className="text-xl font-bold mb-1 inline-block">New Incidents</h2>

        {/* Underline */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="relative h-1 w-full bg-gray-300 rounded">
            <div className="absolute top-0 left-0 h-1 w-1/4 bg-blue-500 rounded"></div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mb-8 max-w-xs md:max-w-xl">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
        >
          Back
        </button>
        <button className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Next Step
        </button>
      </div>

      {/* Section Title */}
      <div className="mb-6">
        <p className="text-gray-700 font-semibold text-lg">
          Which of these best describes the incident?
        </p>
      </div>

      {/* Incident Icons Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
        {incidents.map(({ icon, label, bg, hover, textColor }, i) => (
          <div
            key={i}
            className={`${bg} p-6 rounded-lg cursor-pointer ${hover} flex flex-col items-center`}
          >
            {icon}
            <p className={`${textColor} font-medium`}>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewIncidentsPage;
