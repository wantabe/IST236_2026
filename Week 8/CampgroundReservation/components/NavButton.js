import { Pressable, View, Text, StyleSheet, useWindowDimensions } from "react-native";

// import constants
import Colors from "../constants/colors.js";


function NavButton(props) {
    // get screen dimensions
    const { width, height } = useWindowDimensions();
    
    // display
    return(
        // dynamically change styling on press
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            {/* change fontsize dynamically based on screen width */}
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, { fontSize: width * 0.09 }]}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default NavButton;

// stylesheet
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.accent500,
        borderRadius: 300,
        borderColor: Colors.primary500,
        borderWidth: 3,
        width: 1000,
        maxWidth: "70%",
        marginHorizontal: 10,
        marginVertical: 10,
    },

    pressedItem: {
        opacity: 0.5,
    },

    text: {
        padding: 8,
        fontFamily: "mountain",
        textAlign: "center",
        color: Colors.primary500,
        textShadowColor: "black",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
});