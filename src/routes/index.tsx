import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./paths";
//layouts
import GlobalLayout from "@/layouts/global.layout";
import AuthLayout from "@/layouts/auth.layout";
import PageLayout from "@/layouts/page.layout";

//onboarding
import Splash from "@/pages/onboarding/splash";
import OnboardingPage from "@/pages/onboarding/onboarding";
import LoginPage from "@/pages/auth/Login";
import RegisterPage from "@/pages/auth/Register";
import HomePage from "@/pages/chat/home";
import MessagePage from "@/pages/chat/message";
import CallPage from "@/pages/calls/home";
import ContactsPage from "@/pages/contacts/home";
import SettingsPage from "@/pages/settings/home";

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
            children: [
              {
                path: PATHS.CHAT.HOME,
                element: <HomePage />
              },
              {
                path: PATHS.CHAT.MESSAGE,
                element: <MessagePage />
              },
              {
                path: PATHS.CALLS.LOGS,
                element: <CallPage />
              },
              {
                path: PATHS.CONTACTS.CONTACTlIST,
                element: <ContactsPage />
              },
              {
                path: PATHS.SETTINGS.SETTING,
                element: <SettingsPage />
              }
            ],
          },
        ],
      },
    ],
  },
]);
