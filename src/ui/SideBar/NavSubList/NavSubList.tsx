import { useState, type FC, type ReactNode } from "react";

import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import NavListItem from "../NavListItem/NavListItem";
import { useSideBarContext } from "../SideBarContext";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from "@mui/material/Popover";

interface NavSubListProps {
  children: ReactNode;
  icon: ReactNode;
  text: string;
}

const NavSubList: FC<NavSubListProps> = ({ children, icon, text }) => {
  const { open: sideBarOpen } = useSideBarContext();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <NavListItem
        text={text}
        icon={icon}
        suffix={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        onClick={handleClick}
      />
      {sideBarOpen && (
        <Collapse
          in={sideBarOpen && open}
          timeout="auto"
          unmountOnExit
        >
          <List>{children}</List>
        </Collapse>
      )}
      {!sideBarOpen && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <List>{children}</List>
        </Popover>
      )}
    </>
  );
};

export default NavSubList;
