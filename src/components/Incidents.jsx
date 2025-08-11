import React from "react";
import IncidentCard from "../pages/IncidentCard";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  TextField,
  Button,
} from "@mui/material";

function Incidents() {
  const incidents = [
    {
      title: "Witechapel Rd.",
      location: "Tulare County, Los Angeles, CA 23415",
      price: "$1,456,654.00",
      image: "Image1.png",

      desc: "Severe blizzard warning issued for the area.",
    },
    {
      title: "Baker Street",
      location: "Fresno County, California",
      price: 1323456,
      image: "Image2.png",

      desc: "Massive wildfire spreading rapidly.",
    },
    {
      title: "Elm Avenue",
      location: "Sacramento, CA",
      price: 1245322,
      image: "Image3.png",

      desc: "Flash floods have caused road closures.",
    },
    {
      title: "Sunset Blvd",
      location: "Los Angeles, CA",
      price: 1123000,
      image: "Image4.png",

      desc: "Heavy storms expected tonight.",
    },
    {
      title: "Ocean Drive",
      location: "Santa Monica, CA",
      price: 1543221,
      image: "Image5.png",

      desc: "Hurricane warning in effect.",
    },
    {
      title: "Ocean Drive",
      location: "Santa Monica, CA",
      price: 1543221,
      image: "Image6.png",

      desc: "Hurricane warning in effect.",
    },
  ];
  return (
    <div className="p-4 ml-6 mr-2">
      {/* top section */}
      <h4>hello</h4>
    </div>
  );
}

export default Incidents;
