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

// import navigation libs
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import BookmarksScreen from "./screens/BookmarksScreen";
import LocalNewsScreen from "./screens/LocalNewsScreen";
import NewsDetailScreen from "./screens/NewsDetailScreen";
import USNewsScreen from "./screens/USNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";

// import constants
import Colors from "./constants/colors";

// create navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// drawer navigator function
function DrawerNavigator() {
  return (
    // top-level drawer navigator
    <Drawer.Navigator
      // attributes/styling
      initialRouteName="Articles"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "nolluqa",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      {/* individual drawer tabs */}
      <Drawer.Screen
        // attributes/styling
        name="Articles"
        component={TabsNavigator}
        options={{
          title: "All Articles", // title that appears on the page
          drawerLabel: "News Articles", // title of drawer page in the drawer itself
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        // attributes/styling
        name="BookmarkedArticles"
        component={BookmarksScreen}
        options={{
          title: "Saved Articles",
          drawerLabel: "Saved Articles",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// tabs navigator function
function TabsNavigator() {
  return (
    // top-level tabs navigator
    <Tabs.Navigator
      // attributes/styling
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "playfairBold",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* individual tabs */}
      <Tabs.Screen
        // attributes/styling
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          tabBarLabel: "World News",
        }}
      />
      <Tabs.Screen
        // attributes/styling
        name="USNews"
        component={USNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="apartment" size={size} color={color} />
          ),
          tabBarLabel: "US News",
        }}
      />
      <Tabs.Screen
        // attributes/styling
        name="LocalNews"
        component={LocalNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="holiday-village" size={size} color={color} />
          ),
          tabBarLabel: "Local News",
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
    playfairItalics: require("./assets/fonts/PlayfairBoldItalic.ttf"),
    nolluqa: require("./assets/fonts/NolluqaRegular.otf"),
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
        {/* native stack navigator */}
        <NavigationContainer>
          <Stack.Navigator
            // attributes/styling
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: Colors.primary300,
              headerStyle: { backgroundColor: Colors.primary500 },
              contentStyle: { backgroundColor: "black" },
            }}
          >
            {/* individual stack screens */}
            <Stack.Screen
              // attributes/styling
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              // attributes/styling
              name="NewsDetail"
              component={NewsDetailScreen}
              options={{
                headerBackTitleVisible: false,
              }}
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
