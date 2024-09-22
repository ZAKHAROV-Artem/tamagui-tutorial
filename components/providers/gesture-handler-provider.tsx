import { ReactNode } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type GestureHandlerProviderProps = {
  children: ReactNode;
};
export default function GestureHandlerProvider({
  children,
}: GestureHandlerProviderProps) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {children}
    </GestureHandlerRootView>
  );
}
