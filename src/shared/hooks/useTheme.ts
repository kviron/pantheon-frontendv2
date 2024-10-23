import { useContext } from "react";
import { Theme } from "@tauri-apps/api/window";
import { ThemeContext } from "@/shared/context";

interface UseThemeResult {
  setTheme: (theme: Theme) => void;
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme;
    switch (theme) {
      case "dark":
        newTheme = "light";
        break;
      case "light":
        newTheme = "dark";
        break;
    }
    setTheme?.(newTheme);
    saveAction?.(newTheme);
  };

  return {
    theme: theme,
    setTheme,
    toggleTheme,
  };
}
