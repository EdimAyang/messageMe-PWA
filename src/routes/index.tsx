import { createBrowserRouter } from "react-router-dom";
import GlobalLayout from "../layouts/global.layout";
import AuthLayout from "../layouts/auth.layout";
import PageLayout from "../layouts/page.layout";
import Splash from "../pages/splash";

export const router = createBrowserRouter([
  {
    id: "app",
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <Splash />,
      },
      {
        id: "guard",
        element: <AuthLayout />,
        children: [
          {
            id: "page",
            element: <PageLayout />,
            children: [],
          },
        ],
      },
    ],
  },
]);
