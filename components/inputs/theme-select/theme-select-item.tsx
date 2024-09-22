import { Circle } from "tamagui";

type ThemeSelectItemProps = {
  onPress: () => void;
  bg: string;
  isSelected: boolean;
};
export default function ThemeSelectItem({
  bg,
  isSelected,
  onPress,
}: ThemeSelectItemProps) {
  return (
    <Circle
      animation="bouncy"
      bg={bg}
      h="$3"
      onPress={onPress}
      scale={isSelected ? 1.5 : 1}
      w="$3"
    />
  );
}
