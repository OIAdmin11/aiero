import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Bundled webfonts (fixes missing /assets/fonts/*.woff2 → HTML fallback / OTS errors). */
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/css/v4-shims.min.css";

import "./styles/styles.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
