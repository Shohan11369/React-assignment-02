import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DashboardWithChat from "./pages/DashboardWithChat";
import Incidents from "./components/Incidents";
import NewIncident from "./components/NewIncident";
import NewIncidentsPage from "./components/NewIncidentsPage";
import NextStepPage from "./components/NextStepPage";
import IncidentDetailsPage from "./components/IncidentDetailsPage";

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
          <Route path="/new-incidents" element={<NewIncidentsPage />} />
          <Route path="/next-step" element={<NextStepPage />} />
          <Route path="/incident-details" element={<IncidentDetailsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
