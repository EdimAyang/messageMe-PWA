import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/index";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { createPortal } from "react-dom";
import { Toaster } from "react-hot-toast";
import { ReactQueryClientProvider } from "./lib/react-query";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryClientProvider>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      {createPortal(
        <Toaster containerStyle={{ zIndex: 99999 }} />,
        document.body,
      )}
      <RouterProvider router={router} />
      </ThemeProvider>
    </ReactQueryClientProvider>
  </StrictMode>,
);
