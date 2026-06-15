export const PATHS = {
  //onboarding
  ONBOARDING: {
    SPLASH: "@/page/onboarding/splash",
    ONBOARDING: "@/page/onboarding/onboarding",
  },

  //auth
  AUTH: {
    LOGIN: "@/page/auth/login",
    REGISTER: "@/page/auth/register",
  },

  //pages
  CHAT: {
    HOME: "@/page/chat/home",
    MESSAGE: "/",
  },

  //calls
  CALLS: {
    LOGS: "@/page/calls/home",
  },

  //CONTACTS
  CONTACTS: {
    CONTACTlIST: "@/page/contacts/home",
  },

  //SETTINGS
  SETTINGS: {
    SETTING: "@/page/settings/home",
  },
} as const;
