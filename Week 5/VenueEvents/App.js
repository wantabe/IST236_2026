import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import Colors from "./constants/colors";
import { useFonts } from "expo-font";

export default function App() {
  // set up custom fonts
  const [fontsLoaded] = useFonts({
    "squealer": require("./assets/fonts/Squealer.otf"),
    "squealer-embossed": require("./assets/fonts/SquealerEmbossed.otf")
  })

  // set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  function eventsScreenHandler() {
    setCurrentScreen("events");
  }

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  // determine which screen to be on
  let screen = <HomeScreen onNext={eventsScreenHandler} />;

  if (currentScreen === "events") {
    screen = <EventsScreen onNext={homeScreenHandler} />;
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});
