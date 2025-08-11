// components/NexStepPage.jsx
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const NexStepPage = () => {
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
              onClick={() => navigate("/incident-details")}
              className="px-5 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
            >
              Next step
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-1/4 h-full bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Title input */}
        <div>
          <h2 className="text-lg font-semibold">
            Let’s give the incident a title?
          </h2>
          <p className="text-sm text-gray-500">
            Make a title that will easily identify the incidents
          </p>
          <input
            type="text"
            placeholder="Add title here"
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Description textarea */}
        <div>
          <h2 className="text-lg font-semibold">
            Describe what happened during the incident?
          </h2>
          <p className="text-sm text-gray-500">
            Share some information about the incident. The when, where, how.
          </p>
          <textarea
            placeholder="Type here"
            rows={5}
            className="mt-2 w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default NexStepPage;
