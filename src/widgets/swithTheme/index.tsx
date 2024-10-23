import { useTheme } from "@/shared/hooks";
import { Select } from "@radix-ui/themes";

export const SwithTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Select.Root defaultValue={theme} onValueChange={setTheme}>
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Item value="light">Светлая</Select.Item>
          <Select.Item value="dark">Темная</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};
