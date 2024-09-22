import { ReactNode } from "react";
import { Provider } from "react-redux";
import store, { persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

import TamaguiProvider from "./tamagui-provider";
import GestureHandlerProvider from "./gesture-handler-provider";

type ProvidersProps = {
  children: ReactNode;
};
export default function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerProvider>
          <TamaguiProvider>{children}</TamaguiProvider>
        </GestureHandlerProvider>
      </PersistGate>
    </Provider>
  );
}
