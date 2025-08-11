import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Dashboard() {
  const [chatOpen, setChatOpen] = useState(false);
  const chatRef = useRef(null);

  const incidents = [
    {
      title: "Witechapel Rd.",
      location: "Tulare County, Los Angeles, CA 23415",
      price: 1456654,
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

  // Detect click outside to close chat
  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setChatOpen(false);
      }
    }
    if (chatOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatOpen]);

  return (
    <div className="p-4 ml-6 mr-2 relative">
      {/* top section */}
      <div className="grid md:flex justify-between items-center mb-5 mt-2">
        <div>
          <Typography variant="h7" gutterBottom>
            Welcome Back <br />
            <span className="text-3xl font-bold ">Dashboard</span>
          </Typography>
        </div>
        <div className="flex gap-4 mt-3">
          <TextField label="Search incident" variant="outlined" size="small" />
          <TextField
            label="Sort By: Date modified"
            variant="outlined"
            size="small"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              color: "white",
              fontSize: {
                xs: "0.75rem",
                sm: "1rem",
              },
              padding: {
                xs: "2px 2px",
                sm: "6px 16px",
              },
            }}
          >
            Cypher AI
          </Button>
        </div>
      </div>

      {/* First Row */}
      <div className="grid md:flex gap-4 mb-4">
        {incidents.slice(0, 4).map((item, index) => (
          <Card key={index} className="flex-1 text-center md:text-start !mt-6">
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.location}
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                ${item.price.toLocaleString()}
              </Typography>
              <Typography variant="body2" className="mt-2">
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Second Row */}
      <div className="grid md:flex gap-4 mb-4">
        {incidents.slice(4, 6).map((item, index) => (
          <Card key={index} className="md:w-1/4 text-center md:text-start">
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.location}
              </Typography>
              <Typography variant="subtitle1" className="mt-2 font-bold">
                ${item.price.toLocaleString()}
              </Typography>
              <Typography variant="body2" className="mt-2">
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Floating Chat Button */}
      <div className="flex justify-center md:justify-end">
        <Button
          variant="outlined"
          onClick={() => setChatOpen(true)}
          className="!rounded-full !text-white !text-xl !font-bold w-[50px] h-[50px] !bg-[#F26922]"
        >
          C
        </Button>
      </div>

      {/* Chatbox */}
      {chatOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-20 right-5 w-80 bg-white shadow-lg rounded-lg border flex flex-col"
        >
          {/* Header */}
          <div className="bg-[#F26922] text-white px-4 py-2 rounded-t-lg font-bold">
            Chat with Cypher
          </div>

          {/* Messages */}
          <div className="p-4 space-y-2 max-h-64 overflow-y-auto flex-1">
            <div className="bg-gray-800 text-white px-3 py-2 rounded-lg w-fit max-w-[80%]">
              Lorem ipsum dolar sit general sac mascho werho
            </div>
            <div className="bg-gray-100 text-black px-3 py-2 rounded-lg w-fit max-w-[80%]">
              Lorem ipsum dolar sit general sac mascho werho
            </div>
            <div className="bg-gray-100 text-black px-3 py-2 rounded-lg w-fit max-w-[80%]">
              Lorem ipsum dolar sit general sac mascho werho
            </div>
            <div className="bg-gray-800 text-white px-3 py-2 rounded-lg w-fit max-w-[80%]">
              Lorem ipsum dolar sit general sac mascho werho
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center border-t p-2">
            <input
              type="text"
              placeholder="Enter your question..."
              className="flex-1 px-2 py-1 border rounded-lg text-sm"
            />
            <Button
              variant="contained"
              className="!bg-[#F26922] !text-white !ml-2"
            >
              Send
            </Button>
          </div>

          {/* Close button at bottom */}
          <div className="flex justify-center border-t p-2">
            <IconButton
              size="small"
              onClick={() => setChatOpen(false)}
              sx={{ color: "gray" }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
