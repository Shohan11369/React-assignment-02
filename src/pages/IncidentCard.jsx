import React from "react";
import Incidents from "../components/Incidents";

function IncidentCard({ title, location, price, image, badge }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {badge && (
          <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>

      <div className="p-3">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <p className="text-lg font-bold mt-1">${price.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default IncidentCard;
