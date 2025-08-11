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
      <h2>hello</h2>
    </nav>
  );
}
