import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isOnboarded: boolean;

  login: (token: string, user: User) => void;
  logout: () => void;

  setToken: (token: string) => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      isOnboarded:false,

      login: (token, user) =>
        set({
          token,
          user,
          isAuthenticated: true,
          isOnboarded: true,
        }),

      logout: () =>
        set({
          token: null,
          user: null,
          isAuthenticated: false,
        }),

      setToken: (token) =>
        set({
          token,
          isAuthenticated: true,
        }),

      setUser: (user) =>
        set({
          user,
        }),
    }),
    {
      name: "messageme-auth",

      partialize: (state) => ({
        token: state.token,
        user: state.user,
        isOnboarded: state.isOnboarded
      }),
    },
  ),
);
