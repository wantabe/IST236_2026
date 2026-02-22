import { Pressable, View, Text, StyleSheet } from "react-native";

// import constants
import Colors from "../constants/colors";


// -------------------
// NavButton Component
// -------------------

function NavButton(props) {
    // display content
    return(
        // run passed onPress function on press, display passed text
        <Pressable
            onPress={props.onNext}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NavButton;

// stylesheet
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 85,
        width: 150,
        margin: 8,
        borderRadius: 6,
        backgroundColor: Colors.secondary800,
        borderColor: Colors.accent500,
        borderWidth: 2,
    },

    pressedItem: {
        opacity: 0.8,
    },

    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        fontFamily: "onestRegular",
        color: Colors.primary500,
    },
});