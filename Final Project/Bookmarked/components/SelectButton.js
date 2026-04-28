import { Pressable, View, Text, StyleSheet } from "react-native";

// import constants
import Colors from "../constants/colors";

// ----------------------
// SelectButton Component
// ----------------------
function SelectButton({ children, onPress, selected }) {
    return (
        <Pressable
            android_ripple={{ color: Colors.primary600 }}
            onPress={onPress}
            style={({ pressed }) => pressed && styles.pressedItem}
        >
            <View style={[styles.buttonContainer, selected && styles.buttonContainerSelected]}>
                <Text style={[styles.text, selected && styles.textSelected]} numberOfLines={1}>
                    {children}
                </Text>
            </View>
        </Pressable>
    );
}

export default SelectButton;

// stylesheet
const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.accent800,
        borderRadius: 300,
        width: 160,
        maxWidth: 200,
        paddingHorizontal: 16,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    buttonContainerSelected: {
        backgroundColor: Colors.accent500,
        borderColor: Colors.primary100,
    },
    pressedItem: {
        opacity: 0.3,
    },
    text: {
        padding: 8,
        fontSize: 17,
        fontFamily: "playfair",
        textAlign: "center",
        color: Colors.primary100,
    },
    textSelected: {
        color: Colors.primary100,
    }
})