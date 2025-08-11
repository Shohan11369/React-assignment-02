import React from "react";
import { Grid, Box, Typography, TextField, Button, Paper } from "@mui/material";
import Dashboard from "./Dashboard";

export default function DashboardWithChat() {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {/* Left side - Dashboard */}
      <Grid item xs={12} md={8}>
        <Dashboard />
      </Grid>
    </Grid>
  );
}
