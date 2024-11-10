import type { FC } from "react";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";

import { useAppNavStore } from "@/stores/appNavStore";

import NavItem from "./NavItem";
import { StyledDrawer } from "./AppNav.styled";

const AppNav: FC = () => {
  const open = useAppNavStore((state) => state.open);

  return (
    <StyledDrawer
      variant="permanent"
      open={open}
    >
      <Toolbar></Toolbar>
      <List>
        <NavItem
          text="Dashboard"
          icon={<DashboardIcon />}
          href="/"
          open={open}
        />
        <NavItem
          text="Orders"
          icon={<ShoppingCartIcon />}
          href="/orders"
          open={open}
        />
      </List>
      <Divider />
      <List>
        <NavItem
          text="Reports"
          icon={<BarChartIcon />}
          href="/reports"
          open={open}
        />
        <NavItem
          text="Sales"
          icon={<DescriptionIcon />}
          href="/reports/sales"
          open={open}
        />
        <NavItem
          text="Traffic"
          icon={<DescriptionIcon />}
          href="/reports/traffic"
          open={open}
        />
        <NavItem
          text="Integrations"
          icon={<LayersIcon />}
          href="/integrations"
          open={open}
        />
      </List>
    </StyledDrawer>
  );
};

export default AppNav;
