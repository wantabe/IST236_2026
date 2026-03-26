import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import constants
import Colors from "./constants/colors.js";

// import screens
import HomeScreen from "./screens/HomeScreen";
import CampgroundsOverviewScreen from "./screens/CampgroundsOverviewScreen";

// navigation stack const
const Stack = createNativeStackNavigator();

export default function App() {
  // setup custom fonts
  const [fontsLoaded, fontError] = useFonts({
    mountain: require("./assets/fonts/Mountain.ttf"),
  });

  // show splashscreen until fonts load
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // render only if fonts loaded
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen" // sets initial screen to load
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.primary300,
            headerTitleStyle: { fontFamily: "mountain", fontSize: 40 },
            contentStyle: { backgroundColor: Colors.primary800 }
          }}
        >
          <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: "Campground Locations"
            }}
          />
          <Stack.Screen 
            name="CampgroundsOverviewScreen"
            component={CampgroundsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
