import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DashboardWithChat from "./pages/DashboardWithChat";
import Incidents from "./components/Incidents";
import NewIncident from "./components/NewIncident";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/chat" element={<DashboardWithChat />} />
          <Route path="/incidents" element={<Incidents />} />
          <Route path="/new-incident" element={<NewIncident />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
