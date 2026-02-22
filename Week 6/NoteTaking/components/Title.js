import { Text, StyleSheet } from "react-native"; 
import Colors from "../constants/colors";


// ---------------
// Title Component
// ---------------

function Title(props) {
    // display passed in title
    return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

// stylesheet
const styles = StyleSheet.create({
    title: {
        fontSize: 65,
        color: Colors.primary300,
        textShadowColor: Colors.accent800,
        textShadowRadius: 25,
        fontFamily: "noteFont",
        textAlign: "center",
    },
});