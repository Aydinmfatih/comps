import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import Button from "./components/Button.js";
import { NavigationProvider } from "./context/Navigation.js";

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider> 
  </StrictMode>
);
