import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image, View, StyleSheet } from "react-native";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";



// -----------
// Home Screen
// -----------

function HomeScreen(props) {
    // set safe area boundaries
    const insets = useSafeAreaInsets();

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
                <Title>Recipe Repository</Title>
            </View>

            {/*display home screen image*/}
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/food-image.jpg")}
                    style={styles.image}
                />
            </View>

            {/*display nav button component*/}
            <View style={styles.navButtonContainer}>
                <NavButton onNext={props.onNext}>See Recipes</NavButton>
            </View>
        </View>
    );
}

export default HomeScreen;

//stylesheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: "90%",
    },

    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },

    imageContainer: {
        flex: 2,
        justifyContent: "center",
        borderWidth: 4,
        borderRadius: 30,
        borderColor: Colors.accent500,
        margin: 20,
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 30,
        resizeMode: "stretch",
    },

    navButtonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
})