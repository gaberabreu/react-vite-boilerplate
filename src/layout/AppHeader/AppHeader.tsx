import type { FC } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import ThemeToggle from "@/components/ThemeToggle";
import { useAppNavStore } from "@/stores/appNavStore";

import { StyledAppBar } from "./AppHeader.styled";

const AppHeader: FC = () => {
  const appNavOpen = useAppNavStore((state) => state.open);
  const toggleAppNav = useAppNavStore((state) => state.toggle);

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 5 }}
          onClick={toggleAppNav}
        >
          {appNavOpen ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
        >
          Boilerplate
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppHeader;
