import { type FC, type ReactNode } from "react";

import { styled, type Theme, type CSSObject } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import { SideBarContext } from "./SideBarContext";

const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: theme.drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export interface SideBarProps {
  children: ReactNode;
  open?: boolean;
}

const SideBar: FC<SideBarProps> = ({ open, children }) => {
  return (
    <SideBarContext.Provider value={{ open }}>
      <StyledDrawer
        variant="permanent"
        open={open}
      >
        <Toolbar></Toolbar>
        <Box
          component="nav"
          sx={{
            paddingTop: "5px",
          }}
        >
          {children}
        </Box>
      </StyledDrawer>
    </SideBarContext.Provider>
  );
};

export default SideBar;
