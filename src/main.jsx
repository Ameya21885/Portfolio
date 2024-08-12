import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  // </StrictMode>
);
