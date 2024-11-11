import type { FC } from "react";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Toolbar from "@mui/material/Toolbar";
import DashboardIcon from "@mui/icons-material/Dashboard";

import NavItem from "@/components/AppNav/NavItem";

import { useAppNavStore } from "@/stores/appNavStore";

import { StyledDrawer } from "./AppNav.styled";
import { Box, Divider } from "@mui/material";

const AppNav: FC = () => {
  const open = useAppNavStore((state) => state.open);

  return (
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
        <List
          subheader={
            <ListSubheader
              component="div"
              sx={{
                fontWeight: 700,
                fontSize: "12px",
                height: open ? "40px" : "0px",
                textOverflow: "ellipsis",
                transition: "height 225ms cubic-bezier(0.4, 0, 0.6, 1)",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              Main items
            </ListSubheader>
          }
        >
          <NavItem
            text="Dashboard"
            icon={<DashboardIcon />}
          />
          <NavItem
            text="Orders"
            icon={<DashboardIcon />}
          />
        </List>
        <Divider />
        <List subheader={<ListSubheader>Analytics</ListSubheader>}>
          <NavItem
            text="Reports"
            icon={<DashboardIcon />}
          />
          <NavItem
            text="Integrations"
            icon={<DashboardIcon />}
          />
        </List>
      </Box>
    </StyledDrawer>
  );
};

export default AppNav;
