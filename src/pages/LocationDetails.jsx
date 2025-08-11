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
            className="border rounded px-3 py-1 text-sm"
          />
          <button className="border rounded px-3 py-1 text-sm">
            Sort By: Date modified
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm">
            + New Location
          </button>
        </div>
      </div>
    </div>
  );
}
