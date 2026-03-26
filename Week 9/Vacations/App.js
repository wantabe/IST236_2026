// library imports
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
import DestinationsOverviewScreen from "./screens/DestinationsOverviewScreen";

// navigation stack const
const Stack = createNativeStackNavigator();

export default function App() {
  // setup custom fonts
  const [fontsLoaded, fontError] = useFonts({
    vacation: require("./assets/fonts/Outfit-Regular.ttf"),
    vacationBold: require("./assets/fonts/Outfit-Bold.ttf")
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
            screenOptions={{ // navigation styling
              headerStyle: { backgroundColor: Colors.accent500 },
              headerTintColor: Colors.primary300,
              headerTitleStyle: { fontFamily: "vacation", fontSize: 36 },
              contentStyle: { backgroundColor: Colors.accent800 },
            }}
          > {/* Home Screen */}
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Vacation Destinations",
              }}
            />
            {/* Overview Screen */}
            <Stack.Screen 
              name="DestinationsOverviewScreen"
              component={DestinationsOverviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

// stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
