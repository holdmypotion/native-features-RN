import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { store } from "./store/store";
import { Provider } from "react-redux";
import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaProvider>
  );
}
