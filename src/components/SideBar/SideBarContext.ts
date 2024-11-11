import { createContext, useContext } from "react";

export interface SideBarContextProps {
  open?: boolean;
}

export const SideBarContext = createContext<SideBarContextProps | undefined>(undefined);

export const useSideBarContext = () => {
  const context = useContext(SideBarContext);
  if (context === undefined) {
    throw new Error("useSideBarContext must be used within an SideBarContext.Provider");
  }
  return context;
};
