import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";

// import context
import BookmarksContextProvider, { BookmarksContext } from "./store/context/bookmarks-context";

// import navigation libs
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import HomeScreen from "./screens/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import LibraryScreen from "./screens/LibraryScreen";
import BookDetailScreen from "./screens/BookDetailScreen";

// import constants
import Colors from "./constants/colors";

// create navigators
const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

// tabs navigator function
function TabsNavigator() {
  return (
    // top-level tabs navigator
    <Tabs.Navigator
      // attributes/styling
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary300,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabbarLabelStyle: {
          fontSize: 12,
          fontFamily: "serif",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* individual tabs */}
      <Tabs.Screen
        // attributes/styling
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        // attributes/styling
        name="Discover"
        component={DiscoverScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="compass" size={size} color={color} />
          ),
          tabBarLabel: "Discover",
        }}
      />
      <Tabs.Screen
        // attributes/styling
        name="Library"
        component={LibraryScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="book" size={size} color={color} />
          ),
          tabBarLabel: "Library",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  // setup custom fonts
  const [fontsLoaded, fontError] = useFonts({
    playfair: require("./assets/fonts/Playfair.ttf"),
  });

  // show splash screen until fonts loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  // only render screen if fonts loaded, otherwise null
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="auto" />
        {/* wrap native stack navigator in context provider for app-wide state mgmt */}
        <BookmarksContextProvider>
          {/* native stack navigator */}
          <NavigationContainer>
            <Stack.Navigator
              // attributes/styling
              initialRouteName="TabsScreen"
              screenOptions={{
                headerTintColor: Colors.primary300,
                headerStyle: { backgroundColor: Colors.primary500 },
                contentStyle: { backgroundColor: "black" },
              }}
            >
              <Stack.Screen
                name="TabsScreen"
                component={TabsNavigator}
                options={{ headerShown: false }}
              />              
              <Stack.Screen
                name="BookDetail"
                component={BookDetailScreen}
                options={{
                  headerBackTitleVisible: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarksContextProvider>
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
