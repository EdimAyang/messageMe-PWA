import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#FA549C",

    background: "#0F0F13",
    surface: "#1A1A22",
    card: "#23232D",

    text: "#000",
    textSecondary: "#797C7B",

    border: "#2D2D39",

    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",
  },

  fonts: {
    primary: "Caros, sans-serif",
    secondary: 'Circular Std',
  },

  typography: {
    display: {
      size: "48px",
      weight: 700,
      lineHeight: "56px",
    },

    h1: {
      size: "36px",
      weight: 700,
      lineHeight: "44px",
    },

    h2: {
      size: "30px",
      weight: 700,
      lineHeight: "38px",
    },

    h3: {
      size: "24px",
      weight: 600,
      lineHeight: "32px",
    },

    h4: {
      size: "20px",
      weight: 600,
      lineHeight: "28px",
    },

    bodyLg: {
      size: "18px",
      weight: 400,
      lineHeight: "28px",
    },

    body: {
      size: "16px",
      weight: 400,
      lineHeight: "24px",
    },

    bodySm: {
      size: "14px",
      weight: 400,
      lineHeight: "20px",
    },

    caption: {
      size: "12px",
      weight: 400,
      lineHeight: "16px",
    },

    message: {
      size: "15px",
      weight: 400,
      lineHeight: "22px",
    },

    timestamp: {
      size: "11px",
      weight: 400,
      lineHeight: "14px",
    },
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    full: "999px",
  },

  shadows: {
    sm: "0 2px 8px rgba(0,0,0,0.15)",
    md: "0 4px 12px rgba(0,0,0,0.2)",
    lg: "0 8px 24px rgba(0,0,0,0.25)",
  },

  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "1280px",
  },
};