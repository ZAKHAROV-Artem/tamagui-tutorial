import { View } from "tamagui";
import { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SafeAreaProps = {
  children: ReactNode;
  statusBarBg?: string;
  paddings?: Partial<{
    top: number;
    right: number;
    bottom: number;
    left: number;
  }>;
};
export default function SafeArea({
  children,
  paddings,
  statusBarBg,
}: SafeAreaProps) {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        bg={statusBarBg || "$background"}
        f={1}
        pb={paddings?.bottom ?? insets.bottom}
        pl={paddings?.left ?? insets.left}
        pr={paddings?.right ?? insets.right}
        pt={paddings?.top ?? insets.top}
      >
        {children}
      </View>
    </>
  );
}
