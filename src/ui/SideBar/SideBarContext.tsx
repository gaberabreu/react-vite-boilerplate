import { createContext, useContext } from "react";

export interface SideBarContextProps {
  open?: boolean;
}

export const SideBarContext = createContext<SideBarContextProps>({});

export const useSideBarContext = () => {
  const context = useContext(SideBarContext);

  return context;
};
