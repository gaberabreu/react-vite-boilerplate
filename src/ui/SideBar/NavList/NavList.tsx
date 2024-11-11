import type { FC, ReactNode } from "react";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";

import { useSideBarContext } from "../SideBarContext";

interface NavListProps {
  children?: ReactNode;
  subheader?: string;
}

const NavList: FC<NavListProps> = ({ children, subheader }) => {
  const { open } = useSideBarContext();

  return <List subheader={open && <ListSubheader>{subheader}</ListSubheader>}>{children}</List>;
};

export default NavList;
