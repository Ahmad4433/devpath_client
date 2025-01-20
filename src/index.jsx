import reactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/custom-mui";

reactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <Toaster />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
