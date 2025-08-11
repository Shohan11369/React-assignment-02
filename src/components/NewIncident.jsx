import React from "react";
import { FaClock, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

function NewIncident() {
  return (
    <div className="p-6  max-w-3xl mx-auto mt-6">
      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-2">Let’s get started</h1>

      {/* Subtitle / intro text */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        Please provide the details below to create a new incident.
        <br />
        Ensure all fields are accurate before submitting.
      </p>
    </div>
  );
}

export default NewIncident;
7;
