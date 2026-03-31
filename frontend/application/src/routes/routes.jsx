import { createBrowserRouter } from "react-router-dom";
import Homepage from "../components/Homepage";
import Login from "../components/shared/Login";
import App from "../App";
import Register from "../components/shared/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/homepage", element: <Homepage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
