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

// import contexts
import BookmarksContextProvider, { BookmarksContext } from "./store/context/bookmarks-context";
import ListsContextProvider from "./store/context/lists-context";
import ListBooksContextProvider from "./store/context/list-books-context";
import ReadingProgressContextProvider from "./store/context/reading-progress-context";

// import navigation libs
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import HomeScreen from "./screens/HomeScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import LibraryScreen from "./screens/LibraryScreen";
import BookDetailScreen from "./screens/BookDetailScreen";
import ListDetailScreen from "./screens/ListDetailScreen";

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
        tabBarActiveBackgroundColor: Colors.primary400,
        tabBarActiveTintColor: Colors.primary100,
        tabBarInactiveBackgroundColor: Colors.primary600,
        tabBarInactiveTintColor: Colors.accent500,
        tabbarLabelStyle: {
          fontSize: 12,
          fontFamily: "playfair",
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
    playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
    playfairBoldItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
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
        <StatusBar style="light" />
        {/* wrap native stack navigator in context providers for app-wide state mgmt */}
        <BookmarksContextProvider>
          <ListsContextProvider>
            <ListBooksContextProvider>
              <ReadingProgressContextProvider>
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
                >{/* stack screens */}
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
                  <Stack.Screen
                    name="ListDetail"
                    component={ListDetailScreen}
                    options={{
                      headerBackTitleVisible: false,
                    }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
              </ReadingProgressContextProvider>
            </ListBooksContextProvider>
          </ListsContextProvider>
        </BookmarksContextProvider>
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
