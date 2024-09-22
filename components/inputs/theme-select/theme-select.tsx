import { XStack, XStackProps } from "tamagui";
import { setTheme } from "@/store/slice/theme-slice";
import { useDispatch, useSelector } from "@/store/hooks";

import ThemeSelectItem from "./theme-select-item";

export default function ThemeSelect({ ...props }: XStackProps) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  return (
    <XStack ai="center" gap="$5" jc="center" p="$3" {...props}>
      <ThemeSelectItem
        bg="$black4"
        isSelected={theme === "dark"}
        opPress={() => dispatch(setTheme("dark"))}
      />
      <ThemeSelectItem
        bg="$green8Light"
        isSelected={theme === "green"}
        opPress={() => dispatch(setTheme("green"))}
      />
      <ThemeSelectItem
        bg="$blue8Light"
        isSelected={theme === "light"}
        opPress={() => dispatch(setTheme("light"))}
      />
    </XStack>
  );
}
