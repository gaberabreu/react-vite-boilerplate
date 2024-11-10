import type { FC } from "react";

import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useThemeStore } from "@/stores/themeStore";

const ThemeToggle: FC = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggle = useThemeStore((state) => state.toggle);

  return (
    <IconButton
      color="inherit"
      aria-label="toggle theme"
      onClick={toggle}
    >
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
