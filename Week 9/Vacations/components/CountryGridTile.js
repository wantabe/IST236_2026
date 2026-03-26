// library imports
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

// import constants
import Colors from "../constants/colors";


function CountryGridTile(props) {
    return (
        <View style={styles.gridItem}>
            {/* visual feedback when pressed */}
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                android_ripple={{ color: Colors.primary300 }}
                onPress={props.onPress}
            >
                {/* linear gradient on grid items */}
                <LinearGradient
                    colors={[props.color, props.color, props.color, props.color, props.color, props.color, Colors.accent800o75]}
                    style={styles.innerContainer}
                >
                    <Text style={styles.name}>{props.name}</Text> {/* name of country */}
                </LinearGradient>
            </Pressable>
        </View>
    )
}

export default CountryGridTile;

// stylesheet
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible", // hides android ripple overflow on android only
    },

    button: {
        flex: 1
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },

    name: {
        textAlign: "center",
        fontSize: 30,
        fontFamily: "vacationBold"
    }
})