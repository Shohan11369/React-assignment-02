import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Dashboard", path: "/" },
    { label: "Incidents", path: "/incidents" },
    { label: "Locations", path: "/locations" },
    { label: "Activities", path: "/activities" },
    { label: "Documents", path: "/documents" },
    { label: "Cypher AI", path: "/cypher ai" },
  ];

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="w-28">
          <img src="Logo1.png" alt="Logo" className="w-full h-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-gray-700 hover:text-orange-500 font-semibold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side - Notification + Email */}
        <div className="hidden md:flex items-center gap-4">
          <NotificationsIcon sx={{ fontSize: 22, color: "#555" }} />
          <div className="flex items-center gap-2">
            <img src="/Logo2.png" alt="User" className="w-7 h-7 rounded-full" />
            <span className="text-sm text-gray-800">user@email.com</span>
          </div>
        </div>

        {/* Hamburger Menu - Only for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(true)}>
            <MenuIcon sx={{ fontSize: 26 }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={() => setOpen(false)}>
                <CloseIcon />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-700 hover:text-orange-500"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Notification + Email */}
            <div className="mt-6 flex items-center gap-2">
              <NotificationsIcon sx={{ fontSize: 22, color: "#555" }} />
              <img
                src="/Logo2.png"
                alt="User"
                className="w-7 h-7 rounded-full"
              />
              <span className="text-sm text-gray-800">user@email.com</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
