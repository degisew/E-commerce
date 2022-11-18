import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router } from 'react-router-dom'
import "./index.css";

const theme = createTheme({
  typography: {
    body2: {
      fontWeight: "normal",
      fontSize: "13px",
    },
  },
});
const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
