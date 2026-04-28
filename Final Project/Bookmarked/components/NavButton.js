import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

// -------------------
// NavButton Component
// -------------------
function NavButton(props) {
    return(
        <Pressable
            android_ripple={{color: Colors.primary600}}
            onPress={props.onPress}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text} numberOfLines={1}>{props.children}</Text>
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
        backgroundColor: Colors.accent800,
        borderRadius: 300,
        width: 145,
        maxWidth: 200,
        marginHorizontal: 10,
        marginVertical: 10,
    },

    pressedItem: {
        opacity: 0.3,
    },

    text: {
        padding: 8,
        fontSize: 20,
        fontFamily: "playfair",
        textAlign: "center",
        color: Colors.primary100,
    },
});