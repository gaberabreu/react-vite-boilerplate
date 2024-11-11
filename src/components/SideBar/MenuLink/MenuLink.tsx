import { type FC } from "react";

import MenuItem, { type MenuItemProps } from "../MenuItem";

const MenuLink: FC<MenuItemProps> = ({ ...rest }) => {
  return (
    <MenuItem
      component="a"
      {...rest}
    ></MenuItem>
  );
};

export default MenuLink;
