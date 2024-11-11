import type { FC } from "react";

import { styled } from "@mui/material/styles";
import MuiAppBar, { type AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const AppBar: FC<AppBarProps> = ({ children }) => {
  return (
    <StyledAppBar position="sticky">
      <Toolbar>{children}</Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;
