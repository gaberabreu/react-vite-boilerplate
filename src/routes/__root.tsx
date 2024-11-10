import { createRootRoute, Outlet } from "@tanstack/react-router";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import AppHeader from "@/layout/AppHeader";
import AppNav from "@/layout/AppNav";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <AppHeader />
        <Box sx={{ display: "flex" }}>
          <AppNav />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3 }}
          >
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      </>
    );
  },
});
