import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState, useMemo, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// import screens
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";

// import components

// import constants
import Colors from "./constants/colors";

export default function App() {
  // ---------------------
  // SPLASH SCREEN / FONTS
  // ---------------------
  // set up custom fonts
  const [fontsLoaded, fontError] = useFonts({
    jost: require("./assets/fonts/Jost.ttf")
  });

  // show splash screen until fonts loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // ------------------
  //       STATES
  // ------------------

  // screen states
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  // REPAIR TIME
  // state
  const [repairTimeId, setRepairTimeId] = useState(0);

  // radio buttons
  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    [],
  );

  // SERVICES
  // states
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);
  // handler
  function setServicesHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item,
      ),
    );
  }

  // NEWSLETTER
  // state
  const [newsletter, setNewsletter] = useState(false);
  // handler
  function setNewsLetterHandler() {
    setNewsletter((previous) => !previous);
  }

  // RENTAL MEMBERSHIP
  // state
  const [rentalMembership, setRentalMembership] = useState(false);
  // handler
  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  // SCREEN
  // home screen
  function homeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen("home");
  }
  // order review
  function orderReviewHandler() {
    // calculate price based on selected options
    let price = 0;

    // get price from checkbox selection(s)
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price += services[i].price;
      }
    }

    // get price from radio button selection
    price += repairTimeRadioButtons[repairTimeId].price;

    // add $100 if rental membership selected
    if (rentalMembership) {
      price += 100;
    }

    // set current price to calculated price
    setCurrentPrice(price);
    // change screen to order review
    setCurrentScreen("review");
  }

  // screen var
  let screen = (
    // set screen to homescreen and pass in relevant info
    <HomeScreen
      repairTimeId={repairTimeId}
      onSetRepairTimeId={setRepairTimeId}
      repairTimeRadioButtons={repairTimeRadioButtons}
      services={services}
      onSetServices={setServicesHandler}
      newsletter={newsletter}
      onSetNewsletter={setNewsLetterHandler}
      rentalMembership={rentalMembership}
      onSetRentalMembership={setRentalMembershipHandler}
      onNext={orderReviewHandler}
    />
  );

  if (currentScreen == "review") {
    // change to order review screen and pass in relevant info
    screen = (
      <OrderReviewScreen
        repairTime={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        price={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }

  // -------
  // DISPLAY
  // -------

  // render display if fonts are loaded, otherwise keep splash screen up
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

//stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary100,
    alignItems: "center",
    justifyContent: "center",
  },
});
