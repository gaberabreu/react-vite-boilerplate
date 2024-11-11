import { useMemo, type FC, type ReactNode } from "react";

import { styled, type CSSObject, type Theme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

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
  width: `calc(${theme.spacing(8)} + 1px)`,
});

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: theme.drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

const StyledPermanentDrawer = styled(StyledDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...(open ? openedMixin(theme) : closedMixin(theme)),
  "& .MuiDrawer-paper": open ? openedMixin(theme) : closedMixin(theme),
}));

const StyledTemporaryDrawer = styled(StyledDrawer)(({ theme, open }) => ({
  ...(open ? openedMixin(theme) : closedMixin(theme)),
  "& .MuiDrawer-paper": open ? openedMixin(theme) : closedMixin(theme),
}));

export interface SideBarProps {
  children?: ReactNode;
  open?: boolean;
  mobile?: boolean;
}

const SideBar: FC<SideBarProps> = ({ children, open, mobile }) => {
  const value = useMemo(() => ({ open }), [open]);

  return (
    <SideBarContext.Provider value={value}>
      {mobile ? (
        <StyledTemporaryDrawer
          variant="temporary"
          open={open}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {children}
        </StyledTemporaryDrawer>
      ) : (
        <StyledPermanentDrawer
          variant="permanent"
          open={open}
        >
          {children}
        </StyledPermanentDrawer>
      )}
    </SideBarContext.Provider>
  );
};

export default SideBar;
