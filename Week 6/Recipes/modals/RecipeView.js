import { Modal, StyleSheet, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import components
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";


// -----------------
// Recipe View Modal
// -----------------

function RecipeView(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={props.visible} animationType="slide">
      <View
        // override padding with insets
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        {/*display title component*/}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        {/*display recipe text*/}
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        
        {/*display nav button component*/}
        <View style={styles.buttonContainer}>
          <NavButton onNext={props.onClose}>Return To Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}

export default RecipeView;

// stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.secondary500,
    alignItems: "center",
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    fontFamily: "onestBold",
    color: Colors.primary500,
  },

  textContainer: {
    flex: 5,
    width: "90%",
    borderWidth: 3,
    borderColor: Colors.secondary800,
    padding: 10,
  },
  text: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "onestRegular",
  },

  buttonContainer: {
    marginTop: 10,
    flex: 1,
  },
});
