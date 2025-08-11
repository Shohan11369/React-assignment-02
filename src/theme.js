import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#F97316" },
    secondary: { main: "#1E293B" },
    background: { default: "#F9FAFB" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

export default theme;
