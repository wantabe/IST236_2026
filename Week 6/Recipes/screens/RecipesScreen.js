import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image, View, StyleSheet, FlatList, Text } from "react-native";
import { useState } from "react";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";
//import RecipesItem from "../components/RecipesItem";

// import constants
import Colors from "../constants/colors";
import RecipeItem from "../components/RecipeItem";
import RecipeView from "../modals/RecipeView";


// --------------
// Recipes Screen
// --------------

function RecipesScreen(props) {
    // set safe area boundaries
    const insets = useSafeAreaInsets();

    // handle modals
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalRecipeTitle, setModalRecipeTitle] = useState("");
    const [modalRecipeText, setModalRecipeText] = useState("");

    // recipe view handler function
    function recipeViewHandler(title, text) {
        setModalRecipeTitle(title);
        setModalRecipeText(text);
        setModalIsVisible(true);
    }

    // close view handler function
    function closeRecipeViewHandler() {
        setModalIsVisible(false);
    }

    // -------
    // DISPLAY
    // -------
    return (
        // override padding with insets
        <View style={[StyleSheet.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}
        >
            {/*display title component*/}
            <View style={styles.titleContainer}>
                <Title>Current Recipes</Title>
            </View>

            {/*display recipe items*/}
            <View style={styles.itemContainer}>
                <FlatList
                    data={props.currentRecipes}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={false}
                    renderItem={(itemData) => {
                        return (
                            // display individual recipe items in flatlist, pass in relevant functionality
                            <RecipeItem
                                id={itemData.item.id}
                                title={itemData.item.title}
                                onView={recipeViewHandler.bind(
                                    this,
                                    itemData.item.title,
                                    itemData.item.text
                                )}
                                onDelete={props.onDelete.bind(this, itemData.item.id)}
                            />
                        );
                    }}
                />
            </View>
            
            {/*recipe view modal*/}
            <RecipeView
                visible={modalIsVisible}
                title={modalRecipeTitle}
                text={modalRecipeText}
                onClose={closeRecipeViewHandler}
            />

            {/*display nav buttons*/}
            <View style={styles.buttonContainer}>
                <View style={styles.navButton}>
                    <NavButton onNext={props.onAdd}>Add New Recipe</NavButton>
                </View>
                <View style={styles.navButton}>
                    <NavButton onNext={props.onHome}>Return Home</NavButton>
                </View>
            </View>
        </View>
    );
}

export default RecipesScreen;

// stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },

  titleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  itemContainer: {
    flex: 6,
    marginHorizontal: 20
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
