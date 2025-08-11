// components/IncidentDetailsPage.jsx
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const IncidentDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Breadcrumb & Title */}
          <div>
            <div className="text-sm text-gray-500 space-x-1">
              <Link to="/" className="text-black hover:text-blue-700">
                Home
              </Link>
              <span>-</span>
              <Link to="/incidents" className="text-black hover:text-blue-700">
                Incidents
              </Link>
              <span>-</span>
              <span className="text-black hover:text-blue-700">
                New Incident
              </span>
            </div>
            <h1 className="text-2xl font-bold">New Incident</h1>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
            >
              Back
            </button>
            <button
              onClick={() => alert("Finished!")}
              className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
            >
              Finished
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-2/4 h-full bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
    </div>
  );
};

export default IncidentDetailsPage;
