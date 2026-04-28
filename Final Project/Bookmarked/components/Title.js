import { Text, StyleSheet } from "react-native";

// import constants
import Colors from "../constants/colors";

// ---------------
// Title Component
// ---------------
function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

// stylesheet
const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontFamily: "playfair",
        color: "#ffffff",
        textAlign: "center"
    }
});