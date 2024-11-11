import type { FC } from "react";

import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LayersIcon from "@mui/icons-material/Layers";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";

import { useAppNavStore } from "@/stores/appNavStore";

import SideBar from "./SideBar";
import NavList from "./NavList/NavList";
import NavListItem from "./NavListItem/NavListItem";
import NavSubList from "./NavSubList/NavSubList";

const AppSideBar: FC = () => {
  const open = useAppNavStore((state) => state.open);

  return (
    <SideBar open={open}>
      <NavList subheader="Main items">
        <NavListItem
          text="Dashboard"
          icon={<DashboardIcon />}
        />
        <NavListItem
          text="Orders"
          icon={<ShoppingCartIcon />}
        />
      </NavList>
      <Divider />
      <NavList subheader="Analytics">
        <NavSubList
          text="Reports"
          icon={<BarChartIcon />}
        >
          <NavListItem
            text="Sales"
            icon={<DescriptionIcon />}
          />
          <NavListItem
            text="Traffic"
            icon={<DescriptionIcon />}
          />
        </NavSubList>
        <NavListItem
          text="Integrations"
          icon={<LayersIcon />}
        />
      </NavList>
    </SideBar>
  );
};

export default AppSideBar;
