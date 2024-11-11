import type { FC, ReactNode } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton, { type ListItemButtonProps } from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";

import { useSideBarContext } from "../SideBarContext";

export interface NavListItemProps extends ListItemButtonProps {
  icon: ReactNode;
  text: string;
  suffix?: ReactNode;
}

const NavListItem: FC<NavListItemProps> = ({ icon, text, suffix, ...rest }) => {
  const { open } = useSideBarContext();

  return (
    <Tooltip
      title={!open && text}
      placement="right"
    >
      <ListItem
        disablePadding
        sx={{ display: "block" }}
      >
        <ListItemButton
          sx={[
            {
              minHeight: 48,
              px: 2.5,
            },
            open
              ? {
                  justifyContent: "initial",
                }
              : {
                  justifyContent: "center",
                },
          ]}
          {...rest}
        >
          <ListItemIcon
            sx={[
              {
                minWidth: 0,
                justifyContent: "center",
              },
              open
                ? {
                    mr: 3,
                  }
                : {
                    mr: "auto",
                  },
            ]}
          >
            {icon}
          </ListItemIcon>
          <ListItemText
            primary={text}
            sx={[
              open
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  },
            ]}
          />
          {open && suffix}
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
};

export default NavListItem;
