import { Circle } from "tamagui";

type ThemeSelectItemProps = {
  opPress: () => void;
  bg: string;
  isSelected: boolean;
};
export default function ThemeSelectItem({
  bg,
  isSelected,
  opPress,
}: ThemeSelectItemProps) {
  return (
    <Circle
      animation="bouncy"
      bg={bg}
      h="$3"
      onPress={opPress}
      scale={isSelected ? 1.5 : 1}
      w="$3"
    />
  );
}
