import { createRootRoute, Outlet } from "@tanstack/react-router";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import AppHeader from "@/layout/AppHeader";
import AppSideBar from "@/ui/SideBar/AppSideBar";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <AppHeader />
        <Box sx={{ display: "flex" }}>
          <AppSideBar />
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
