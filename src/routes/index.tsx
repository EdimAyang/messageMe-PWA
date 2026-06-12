import { createBrowserRouter } from "react-router-dom";

//layouts
import GlobalLayout from "@/layouts/global.layout";
import AuthLayout from "@/layouts/auth.layout";
import PageLayout from "@/layouts/page.layout";

//onboarding
import Splash from "@/pages/onboarding/splash";
import OnboardingPage from "@/pages/onboarding/onboarding";
import { PATHS } from "./paths";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";

export const router = createBrowserRouter([
  {
    id: "app",
    element: <GlobalLayout />,
    children: [
      {
        path: PATHS.ONBOARDING.SPLASH,
        element: <Splash />,
      },
      {
        path: PATHS.ONBOARDING.ONBOARDING,
        element: <OnboardingPage />,
      },
      {
        path: PATHS.AUTH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATHS.AUTH.REGISTER,
        element: <RegisterPage />,
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
