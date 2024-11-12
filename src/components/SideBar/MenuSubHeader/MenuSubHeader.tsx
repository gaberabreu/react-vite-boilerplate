import type { FC, ReactNode } from "react";

import ListSubheader from "@mui/material/ListSubheader";

import { useSideBarContext } from "../SideBarContext";

export interface MenuSubHeaderProps {
  text?: ReactNode;
}

const MenuSubHeader: FC<MenuSubHeaderProps> = ({ text }) => {
  const { open } = useSideBarContext();

  return (
    <ListSubheader
      sx={{
        height: "40px",
        overflow: "hidden",
        maxHeight: open ? "40px" : "0px",
        transition: `max-height 225ms ease`,
      }}
    >
      {text}
    </ListSubheader>
  );
};

export default MenuSubHeader;
