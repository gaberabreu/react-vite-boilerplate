import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SideBarState {
  isOpen: boolean;
  toggle: () => void;
}

export const useSideBarStore = create<SideBarState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        toggle: () => set((state) => ({ isOpen: !state.isOpen })),
      }),
      { name: "sideBarStore" }
    )
  )
);
