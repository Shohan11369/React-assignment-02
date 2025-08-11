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
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Where’s the incident?</h2>
          <p className="text-sm text-gray-500">
            Enter a GPS, address, or pin point on the map. Try to be as accurate
            as possible, or click: Jurisdiction Wide
          </p>

          {/* Map Container */}
          <div className="relative mt-6">
            {/* Replace this with a real Map component */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512707.587322932!2d-124.59224181841037!3d37.15191479092749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2smy!4v1754924388170!5m2!1sen!2smy"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>

            {/* Search Boxes */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <input
                type="text"
                placeholder="Enter incident address or GPS"
                className="px-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Pinpoint damage"
                className="px-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Pin Marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentDetailsPage;
