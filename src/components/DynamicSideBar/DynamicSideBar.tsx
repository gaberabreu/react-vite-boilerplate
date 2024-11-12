import type { FC, ReactNode } from "react";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";

import MenuLink from "@/components/SideBar/MenuLink";
import MenuSubHeader from "@/components/SideBar/MenuSubHeader";
import SideBar, { type SideBarProps } from "@/components/SideBar";
import SubMenu from "@/components/SideBar/SubMenu";

export interface BaseDynamicSideBarElement {
  kind: "menuSubHeader" | "subMenu" | "menuLink" | "divider";
  key: string;
  icon: ReactNode;
  text: string;
  to: string;
  subElements: DynamicSideBarElement[];
}

export interface DynamicSideBarSubHeaderElement
  extends Pick<BaseDynamicSideBarElement, "text" | "key"> {
  kind: "menuSubHeader";
}

export interface DynamicSideBarMenuLinkElement
  extends Pick<BaseDynamicSideBarElement, "icon" | "text" | "to" | "key"> {
  kind: "menuLink";
}

export interface DynamicSideBarSubMenuElement
  extends Pick<BaseDynamicSideBarElement, "icon" | "text" | "subElements" | "key"> {
  kind: "subMenu";
}

export interface DynamicSideBarDividerElement
  extends Pick<BaseDynamicSideBarElement, "kind" | "key"> {
  kind: "divider";
}

export type DynamicSideBarElement =
  | DynamicSideBarSubHeaderElement
  | DynamicSideBarSubMenuElement
  | DynamicSideBarMenuLinkElement
  | DynamicSideBarDividerElement;

export interface DynamicSideBarProps extends SideBarProps {
  elements: DynamicSideBarElement[];
  toolbar?: boolean;
}

const DynamicSideBar: FC<DynamicSideBarProps> = ({ elements, toolbar, ...rest }) => {
  const renderElement = (element: DynamicSideBarElement) => {
    switch (element.kind) {
      case "menuSubHeader":
        return (
          <MenuSubHeader
            key={element.key}
            text={element.text}
          />
        );
      case "subMenu":
        return (
          <SubMenu
            key={element.key}
            icon={element.icon}
            text={element.text}
          >
            {element.subElements?.map((subElement) => renderElement(subElement))}
          </SubMenu>
        );
      case "menuLink":
        return (
          <MenuLink
            key={element.key}
            icon={element.icon}
            text={element.text}
            to={element.to}
          />
        );
      case "divider":
        return <Divider key={element.key} />;
    }
  };

  return (
    <SideBar {...rest}>
      {toolbar && <Toolbar />}
      <List>{elements.map((element) => renderElement(element))}</List>
    </SideBar>
  );
};

export default DynamicSideBar;
