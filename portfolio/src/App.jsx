import React from "react"
// import { BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#b71c1c',
    },
    secondary: {
      main: '#f50057',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
          <Home />
          
      </div>
    </ThemeProvider>

  );
}

export default App;
