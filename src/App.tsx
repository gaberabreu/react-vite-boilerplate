import { useState } from "react";

import { ThemeProvider, createTheme, type PaletteMode } from "@mui/material/styles";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import BarChartIcon from "@mui/icons-material/BarChart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import AppBar from "@/components/AppBar";
import SideBar from "@/components/SideBar";
import MenuLink from "@/components/SideBar/MenuLink";
import MenuSubHeader from "@/components/SideBar/MenuSubHeader";
import SubMenu from "@/components/SideBar/SubMenu";

declare module "@mui/material/styles" {
  interface Theme {
    drawerWidth: number;
  }

  interface ThemeOptions {
    drawerWidth?: number;
  }
}

const App = () => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
    drawerWidth: 240,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 5 }}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <MenuOpenIcon /> : <MenuIcon />}
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
          <IconButton
            color="inherit"
            aria-label="toggle theme"
            onClick={() => setMode((prev) => (prev === "dark" ? "light" : "dark"))}
          >
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        <SideBar open={open}>
          <Toolbar />
          <List>
            <MenuSubHeader text="Main items" />
            <MenuLink
              icon={<DashboardIcon />}
              selected
              text="Dashboard"
              to="/"
            />
            <MenuLink
              icon={<ShoppingCartIcon />}
              text="Orders"
              to="/orders"
            />
          </List>
          <Divider />
          <List>
            <MenuSubHeader text="Analytics" />
            <SubMenu
              icon={<BarChartIcon />}
              text="Reports"
            >
              <MenuLink
                icon={<DescriptionIcon />}
                text="Sales"
                to="/reports/sales"
              />
              <MenuLink
                icon={<DescriptionIcon />}
                text="Traffic"
                to="/reports/traffic"
              />
            </SubMenu>
            <MenuLink
              icon={<LayersIcon />}
              text="Integrations"
              to="/integrations"
            />
          </List>
        </SideBar>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          Page content
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
