import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AppNavState {
  open: boolean;
  toggle: () => void;
}

export const useAppNavStore = create<AppNavState>()(
  devtools(
    persist(
      (set) => ({
        open: false,
        toggle: () => set((state) => ({ open: !state.open })),
      }),
      { name: "appNavStore" }
    )
  )
);
