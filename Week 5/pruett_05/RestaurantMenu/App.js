// expo/react/react native imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";
import { useFonts } from "expo-font";

// import screens
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';

// import colors const
import Colors from './constants/colors';

export default function App() {
    // set up custom fonts
    const [fontsLoaded] = useFonts({
      "heavenmono": require("./assets/fonts/HeavenMono.ttf"),
    })

    // set state var for current screen
    const [currentScreen, setCurrentScreen] = useState("home");

    // handler func for menu screen
    function menuScreenHandler() {
      setCurrentScreen("menu");
    }
    // handler func for home screen
    function homeScreenHandler() {
      setCurrentScreen("home");
    }

    // determine which screen to be on
    let screen = <HomeScreen onNext={menuScreenHandler} />;

    // switch screen handler
    if (currentScreen === "menu") {
      screen = <MenuScreen onNext={homeScreenHandler} />;
    }
    // display content on screen
    return (
      // display selected screen within safe area
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>    
  );
}
// style sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
