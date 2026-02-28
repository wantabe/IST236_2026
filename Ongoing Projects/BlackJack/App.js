import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

// import screens
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

// import constants
import Colors from "./constants/colors";

export default function App() {
  // set up custom fonts
  const [fontsLoaded, fontError] = useFonts({
    poker: require("./assets/fonts/Poker.ttf"),
    pokerGeneral: require("./assets/fonts/PokerKings-Regular.ttf"),
  });

  // show splash screen until fonts loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // set state variable to determine which screen to be on
  const [currentScreen, setCurrentScreen] = useState("start");

  // state variables to keep track of scores
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  // -----------------
  // Handler Functions
  // -----------------

  function newGameHandler() {
    setCurrentScreen("game");
  }

  function gameOverHandler() {
    setCurrentScreen("gameOver");
  }

  function restartHandler() {
    setCurrentScreen("start");
  }

  function setUserScoreHandler(score) {
    setUserScore(score);
  }

  function setComputerScoreHandler(score) {
    setComputerScore(score);
  }

  // ------------
  // Screen Logic
  // ------------

  let screen = <StartGameScreen onNext={newGameHandler} />;

  if (currentScreen === "game") {
    screen = (
      <GameScreen
        onNext={gameOverHandler}
        onSetUserScore={setUserScoreHandler}
        onSetComputerScore={setComputerScoreHandler}
      />
    );
  }

  if (currentScreen === "gameOver") {
    screen = (
      <GameOverScreen
        onNext={restartHandler}
        user={userScore}
        computer={computerScore}
      />
    );
  }

  // -------
  // Display
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
  },
});
