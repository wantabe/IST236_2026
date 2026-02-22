import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import screens
import HomeScreen from './screens/HomeScreen';
import RecipesScreen from './screens/RecipesScreen';
import AddRecipeScreen from './screens/AddRecipeScreen';

// import constants
import Colors from "./constants/colors";


// --------
// Main App
// --------
export default function App() {
  // set up custom fonts
  const [fontsLoaded] = useFonts({
    onestRegular: require("./assets/fonts/Onest-Regular.ttf"),
    onestBold: require("./assets/fonts/Onest-Bold.ttf"),
    onestThin: require("./assets/fonts/Onest-Thin.ttf")
  })

  // handle current screen state
  const [currentScreen, setCurrentScreen] = useState("home");
  // handle current recipe id state
  const [currentID, setCurrentID] = useState(3); // CHANGE LATER

  // array of current recipes
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Spaghetti",
      text: "1. Boil noodle\n2. Heat sauce\n3. Cook meat\n4. Combine\n5. Eat"
    },
    {
      id: 2,
      title: "Cereal",
      text: "1. Pour cereal\n2. Pour milk\n3. Eat"
    },
  ]);

  // ---------------
  // STATE FUNCTIONS
  // ---------------

  // screen change handlers
  function homeScreenHandler() {
    setCurrentScreen("home");
  }
  function recipesScreenHandler() {
    setCurrentScreen("recipes");
  }
  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  // function to add recipes
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    // add new recipe with passed info
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes, {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText}
      ];
    });
    // increment recipe id
    setCurrentID(currentID + 1);
    // return to recipes screen
    recipesScreenHandler();
  }

  // function to delete recipes
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id); // return current recipes - recipe with selected id
    });
  }

  // ------------
  // SCREEN LOGIC
  // ------------

  // start on home screen
  let screen = <HomeScreen onNext={recipesScreenHandler} />;
  
  // change screen, pass in relevant functions
  if (currentScreen === "add") {
    screen = <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipesScreenHandler} />;
  }

  // change screen, pass in relevant functions
  if (currentScreen === "recipes") {
    screen = <RecipesScreen
                onHome={homeScreenHandler}
                onAdd={addRecipeScreenHandler}
                onDelete={deleteRecipeHandler}
                currentRecipes={currentRecipes}
              />;
  }
  


  // -------
  // DISPLAY
  // -------
  return (
    <>
      <StatusBar style="auto" />
      {/*display current screen*/}
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

// stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
