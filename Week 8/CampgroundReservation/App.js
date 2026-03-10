// Default / Community Library Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from "expo-splash-screen";

// import constants
import Colors from './constants/colors';

// import screens
import HomeScreen from './screens/HomeScreen';


export default function App() {
  // set up custom fonts
  const [fontsLoaded, fontError] = useFonts({
    mountain: require("./assets/fonts/CarterOne-Regular.ttf")
  });

  // show splashscreen until fonts loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  // set default screen
  let screen = <HomeScreen />;

  // render screen only if fonts load
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

// stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500o5,
  },
});
