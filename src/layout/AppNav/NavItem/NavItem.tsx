import type { FC } from "react";

import type { LinkProps } from "@tanstack/react-router";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LinkBehavior from "../LinkBehaviour";

interface NavItemProps {
  text: string;
  icon: JSX.Element;
  href: LinkProps["to"];
  open: boolean;
}

const NavItem: FC<NavItemProps> = ({ text, icon, href = "/", open }) => {
  return (
    <ListItem
      disablePadding
      sx={{ display: "block" }}
    >
      <ListItemButton
        LinkComponent={LinkBehavior}
        href={href}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{ opacity: open ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default NavItem;
