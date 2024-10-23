import { Theme } from "@tauri-apps/api/window";
import { useTheme } from "@/shared/hooks";

export const SwithTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={(e) => {
        setTheme(e.target.value as Theme);
      }}
    >
      <option value={"light"}>Светлая</option>
      <option value={"dark"}>Темная</option>
    </select>
  );
};
