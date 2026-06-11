import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;

      background: string;
      surface: string;
      card: string;

      text: string;
      textSecondary: string;

      border: string;

      success: string;
      warning: string;
      error: string;
    };

    fonts: {
      primary: string;
    };

    typography: {
      display: Typography;
      h1: Typography;
      h2: Typography;
      h3: Typography;
      h4: Typography;
      bodyLg: Typography;
      body: Typography;
      bodySm: Typography;
      caption: Typography;
      message: Typography;
      timestamp: Typography;
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    radius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };

    shadows: {
      sm: string;
      md: string;
      lg: string;
    };

    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }

  interface Typography {
    size: string;
    weight: number;
    lineHeight: string;
  }
}