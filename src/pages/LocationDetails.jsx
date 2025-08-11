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
      image: "https://picsum.photos/id/1011/400/300",
      badge: "Re Building",
    },
    {
      id: 2,
      title: "Whitechapel Rd.",
      location: "Tulare County, Los Angeles, CA 23415",
      price: 1456654,
      image: "https://picsum.photos/id/1012/400/300",
      badge: "Re Building",
    },
    {
      id: 3,
      title: "Whitechapel Rd.",
      location: "Tulare County, Los Angeles, CA 23415",
      price: 1456654,
      image: "https://picsum.photos/id/1013/400/300",
      badge: "Re Building",
    },
    {
      id: 4,
      title: "Whitechapel Rd.",
      location: "Tulare County, Los Angeles, CA 23415",
      price: 1456654,
      image: "https://picsum.photos/id/1014/400/300",
      badge: "Re Building",
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
      <h1>hello</h1>
    </div>
  );
}
