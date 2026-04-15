import React from "react";
import { createRoot } from "react-dom/client";
import AlphaOmegaDjsWebsite from "./AlphaOmegaDjsWebsite";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AlphaOmegaDjsWebsite />
  </React.StrictMode>,
);
