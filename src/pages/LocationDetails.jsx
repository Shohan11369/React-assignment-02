// src/pages/LocationDetails.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiDollarSign, FiChevronRight } from "react-icons/fi";

export default function LocationDetails() {
  const locations = [
    {
      id: 1,
      title: "Whitechapel Rd.",
      location: "Tulare County, Los Angeles, CA 23415",
      price: 1456654,
      image: "Group1.png",
      badge: "Building",
    },
    {
      id: 2,
      title: "Whitechapel Rd.",
      location: "Tulare County, Los Angeles, CA 23415",
      price: 1456654,
      image: "Group2.png",
      badge: "Building",
    },
    {
      id: 3,
      title: "Whitechapel Rd.",
      location: "Tulare County, Los Angeles, CA 23415",
      price: 1456654,
      image: "Group1.png",
      badge: "Building",
    },
    {
      id: 4,
      title: "Whitechapel Rd.",
      location: "Tulare County, Los Angeles, CA 23415",
      price: 1456654,
      image: "Group1.png",
      badge: "Building",
    },
  ];

  const activities = [
    { id: 1, name: "Activity name", location: "Location name", price: 1456654 },
    { id: 2, name: "Activity name", location: "Location name", price: 1456654 },
  ];

  const documents = [
    { id: 1, name: "Document name", location: "Location name", price: 1456654 },
    { id: 2, name: "Document name", location: "Location name", price: 1456654 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <h1 className="text-2xl font-bold">DR-4699 March 2023 Severe Storms</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search incident"
            className="border rounded px-2 md:px-3 py-1 text-sm"
          />
          <button className="border rounded px-2 md:px-3 py-1 text-xs md:text-sm">
            Sort By: Date modified
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs md:text-sm">
            + New Location
          </button>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-8">
          {/* Location Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-700">
              <FiMapPin className="text-lg mt-4" />
              <span className="font-medium mt-4">
                Tulare County, Los Angeles, CA 23415
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <FiDollarSign className="text-lg" />
              <span className="font-medium text-lg">$60,607,456.00</span>
            </div>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              quibusdam repellendus ratione pariatur incidunt, iure mollitia
              deleniti obcaecati quasi explicabo velit. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Locations */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold">Locations</h2>
              <Link
                to="/locations"
                className="text-sm text-gray-500 hover:underline flex items-center gap-1"
              >
                See all <FiChevronRight />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className="bg-white border rounded shadow-sm overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={loc.image}
                      alt={loc.title}
                      className="w-full h-40 object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-white text-black text-xs font-semibold px-2 py-1 rounded">
                      {loc.badge}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium">{loc.title}</h3>
                    <p className="text-xs text-gray-500">{loc.location}</p>
                    <p className="font-semibold mt-1">
                      ${loc.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold">Activities</h2>
              <Link
                to="/activities"
                className="text-sm text-gray-500 hover:underline flex items-center gap-1"
              >
                See all <FiChevronRight />
              </Link>
            </div>
            <div className="space-y-3">
              {activities.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded"
                >
                  <img
                    src="Group1.png"
                    alt=""
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      {item.location} • 16.1212, -122.1424
                    </p>
                    <p className="font-semibold">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold">Documents</h2>
              <Link
                to="/documents"
                className="text-sm text-gray-500 hover:underline flex items-center gap-1"
              >
                See all <FiChevronRight />
              </Link>
            </div>
            <div className="space-y-3">
              {documents.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded"
                >
                  <img
                    src="Group2.png"
                    alt=""
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      {item.location} • 16.1212, -122.1424
                    </p>
                    <p className="font-semibold">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right Side (Map) */}
        <div className="lg:w-1/2 mt-10">
          <p className="text-xs md:text-sm mb-2">Incident Map</p>
          <img src="Map.png" alt="Incident Map" className="w-full rounded" />
          <p className="text-xs text-gray-500 mt-1">
            Start 19.1232, -118.2233 &nbsp; End 19.3245, -119.2323
          </p>
        </div>
      </div>
    </div>
  );
}
