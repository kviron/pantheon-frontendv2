import { Theme } from "@tauri-apps/api/window";
import { ThemeContext } from "@/shared/context";
import { FC, useEffect, useMemo, useState } from "react";
import { tauriService } from "@/shared/services";

type ThemeProviderProps = {
  children: JSX.Element;
};

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;
  const [systemStory, setSystemStory] = useState<Theme>("dark");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    tauriService.getTheme().then((newTheme) => {
      if (newTheme) {
        setTheme(newTheme);
        setSystemStory(newTheme);
      }
    });
  }, []);

  useEffect(() => {
    document.body.className = `theme-${theme}`;

    if (systemStory !== theme) {
      tauriService.setTheme(theme);
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
