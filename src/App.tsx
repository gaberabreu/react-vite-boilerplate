import { RouterProvider, createRouter } from "@tanstack/react-router";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useThemeStore } from "./stores/themeStore/themeStore";

import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    drawerWidth: number;
  }

  interface ThemeOptions {
    drawerWidth?: number;
  }
}

const App = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
    drawerWidth: 240,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
