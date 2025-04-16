import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/router/router.jsx";

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>   
    </div>
  </StrictMode>
);
