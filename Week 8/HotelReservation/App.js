import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

// import constants
import Colors from './constants/colors';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import components

// import screens
import HomeScreen from './screens/HomeScreen';


export default function App() {
  // set up custom fonts
  const [fontsLoaded, fontError] = useFonts({
    hotel: require("./assets/fonts/TheHotelio.ttf")
  });

  // show splashscreen until fonts loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  let screen = <HomeScreen />;

  // render screen only if fonts load
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
