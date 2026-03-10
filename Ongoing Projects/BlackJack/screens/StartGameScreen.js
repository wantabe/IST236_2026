import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

// -----------------
// Start Game Screen
// -----------------

function StartGameScreen(props) {
  // set safe area screen boundaries
  const inset = useSafeAreaInsets();

  // get window dimensions dynamically
  const { width, height } = useWindowDimensions();

  return (
    <LinearGradient
      colors={[Colors.accent800, Colors.accent200, Colors.accent800, Colors.accent200]}
      style={styles.rootContainer}      
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: inset.top,
            paddingBottom: inset.bottom,
            paddingLeft: inset.left,
            paddingRight: inset.right,
            height: height,
            width: width,
          },
        ]}
      >
        <View style={[styles.titleContainer, {height: height * 0.15}]}>
          <Title>BlackJack 21</Title>
        </View>

        <View style={[styles.imageContainer, {height: height * 0.5}]}>
          <Image
            style={styles.image}
            source={require("../assets/images/blackjackbg.png")}
          />
        </View>

        <View style={[styles.buttonContainer, {height: height * 0.15}]}>
          <NavButton onPress={props.onNext}>Play Now</NavButton>
        </View>
      </View>
    </LinearGradient>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "100%",
    resizeMode: "contain",
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
