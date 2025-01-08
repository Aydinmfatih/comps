import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import Button from "./button.js";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Button className="mb-5" primary>
      <GoBell />
      Click Me
    </Button>
    <Button warning rounded>
      <GoDatabase />
      Click Me
    </Button>
    <Button danger rounded>
      <GoCloudDownload />
      Click Me
    </Button>
  </StrictMode>
);
