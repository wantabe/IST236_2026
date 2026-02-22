import { Image, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";


// -----------------
// Add Recipe Screen
// -----------------

function AddRecipeScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  // variables to handle recipe title/text
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  // add recipe handler function
  function addRecipeHandler() {
    props.onAdd(recipeTitle, recipeText);
    props.onCancel();
  }

  // -------
  // DISPLAY
  // -------
  return (
    // override padding with insets
    <View
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
        <Title>Add New Recipe</Title>
      </View>

      {/*display recipes in scrollview*/}
      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.recipeTitleContainer}>
            <TextInput 
                placeholder="Enter recipe title here" 
                style={styles.recipeTitle}
                onChangeText={setRecipeTitle}
            />
          </View>
          <View style={styles.recipeTextContainer}>
            <TextInput 
                placeholder="Enter recipe text here" 
                style={styles.recipeText}
                onChangeText={setRecipeText}
                textAlignVertical="top"
                multiline={true}
                numberOfLines={20}
            />
          </View>

          {/*display nav buttons*/}
          <View style={styles.buttonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addRecipeHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddRecipeScreen;

// stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  titleContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },

  scrollContainer: {
    flex: 5,
  },

  recipeTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary500,
    marginHorizontal: 20,
  },
  recipeTitle: {
    color: Colors.secondary800,
    fontFamily: "onestBold",
    fontSize: 30,
  },

  recipeTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary500,
    alignItems: "flex-start",
    marginHorizontal: 20,
    height: 400
  },
  recipeText: {
    color: Colors.secondary800,
  },

  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});
