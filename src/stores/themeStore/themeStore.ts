import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ThemeState {
  isDarkMode: boolean;
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        isDarkMode: false,
        toggle: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      }),
      { name: "themeStore" }
    )
  )
);
