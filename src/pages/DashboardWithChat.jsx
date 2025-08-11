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

      {/* Right side - Chat Box */}
      <Grid item xs={12} md={4}>
        <Paper
          sx={{
            height: "100%",
            padding: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Live Chat
          </Typography>
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              mb: 2,
              border: "1px solid #ddd",
              p: 1,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Chat messages will appear here...
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField fullWidth size="small" placeholder="Type a message..." />
            <Button variant="contained">Send</Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
