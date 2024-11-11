import type { FC, ReactNode } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton, { type ListItemButtonProps } from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useAppNavStore } from "@/stores/appNavStore";

interface NavItemProps extends ListItemButtonProps {
  text: string;
  icon: ReactNode;
}

const NavItem: FC<NavItemProps> = ({ text, icon, ...rest }) => {
  const open = useAppNavStore((state) => state.open);

  return (
    <ListItem
      disablePadding
      sx={{ display: "block" }}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
        {...rest}
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
