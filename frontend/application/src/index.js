import React from "react";
import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { router } from "./routes/routes";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>,
);
