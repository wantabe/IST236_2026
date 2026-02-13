import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";


// -------------------
// NavButton Component
// -------------------

function NavButton(props) {
    // display content
    return(
        // run passed onPress function on press, display passed text
        <Pressable
        android_ripple={{color: "grey"}}
        onPress={props.onPress}>
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NavButton;

// style sheet
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderRadius: 10,
        borderColor: Colors.accent500,
        backgroundColor: Colors.primary800,
        width: 250,
        height: 50,
        margin: 10
    },

    textContainer: {

    },
    text: {
        fontSize: 30,
        paddingTop: 5,
        textAlign: "center",
        color: Colors.accent500,
        fontFamily: "heavenmono"
    }
})