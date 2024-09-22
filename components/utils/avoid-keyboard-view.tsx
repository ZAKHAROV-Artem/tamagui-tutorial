import { ReactNode } from "react";
import { KeyboardAvoidingView } from "react-native";

type AvoidKeyboardViewProps = {
  children: ReactNode;
};
export default function AvoidKeyboardView({
  children,
}: AvoidKeyboardViewProps) {
  return (
    <KeyboardAvoidingView behavior="padding">{children}</KeyboardAvoidingView>
  );
}
