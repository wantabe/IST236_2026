import { Image, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";


// -----------
// Home Screen
// -----------

function HomeScreen(props) {
    // set safe area screen boundaries
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}
        >
            <View style={styles.titleContainer}>
                <Title>Thought Vault</Title>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/images/note-taking.jpg")}
                    style={styles.image}
                />
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onNext={props.onNext}>Go To Notes</NavButton>
            </View>
        </View>
    );
}

export default HomeScreen;

// style sheet
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
        borderRadius: 55,
        borderColor: Colors.accent500,
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 50,
        resizeMode: "stretch",
    },

    buttonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
})