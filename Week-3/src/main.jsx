import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";  // ✅ Ensure Tailwind is imported
import App from "./App.jsx";

// Select the root element
const rootElement = document.getElementById("root");

// Ensure root element exists before rendering
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found! Make sure your index.html has a <div id='root'></div>.");
}
