import { useState } from "react";

import { ThemeProvider, createTheme, type PaletteMode } from "@mui/material/styles";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

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
import DynamicSideBar from "@/components/DynamicSideBar";

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

  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        <DynamicSideBar
          toolbar
          open={open}
          mobile={mobile}
          elements={[
            {
              key: "menuSubHeader-1",
              kind: "menuSubHeader",
              text: "Main items",
            },
            {
              key: "menuLink-1",
              kind: "menuLink",
              icon: <DashboardIcon />,
              text: "Dashboard",
              to: "/",
            },
            {
              key: "menuLink-2",
              kind: "menuLink",
              icon: <ShoppingCartIcon />,
              text: "Shopping",
              to: "/orders",
            },
            {
              key: "divider-1",
              kind: "divider",
            },
            {
              key: "menuSubHeader-2",
              kind: "menuSubHeader",
              text: "Analytics",
            },
            {
              key: "subMenu-1",
              kind: "subMenu",
              icon: <BarChartIcon />,
              text: "Reports",
              subElements: [
                {
                  key: "menuLink-3",
                  kind: "menuLink",
                  icon: <DescriptionIcon />,
                  text: "Sales",
                  to: "/reports/sales",
                },
                {
                  key: "menuLink-4",
                  kind: "menuLink",
                  icon: <DescriptionIcon />,
                  text: "Traffic",
                  to: "/reports/traffic",
                },
              ],
            },
            {
              key: "menuLink-5",
              kind: "menuLink",
              icon: <LayersIcon />,
              text: "Integrations",
              to: "/integrations",
            },
          ]}
        />
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
