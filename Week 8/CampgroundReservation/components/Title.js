import { Text, StyleSheet, useWindowDimensions } from "react-native";

// import constants
import Colors from "../constants/colors.js";

function Title(props) {
    // get screen dimensions
    const {width, height } = useWindowDimensions();

    // dynamically change fontsize based on screen width
    return <Text style={[styles.title, { fontSize: width * 0.11 }]}>{props.children}</Text>;
}

export default Title;

// stylesheet
const styles = StyleSheet.create({
    title: {
        fontFamily: "mountain",
        color: Colors.primary500,
        textAlign: "center",
        textShadowColor: "black",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    }
});