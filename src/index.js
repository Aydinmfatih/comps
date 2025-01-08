import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App.js";
import Button from "./button.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
   <Button primary >Click Me</Button>
   <Button warning rounded >Click Me</Button>
   <Button danger rounded >Click Me</Button>
  </StrictMode>
);
