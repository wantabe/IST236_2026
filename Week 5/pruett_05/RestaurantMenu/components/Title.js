// react native imports
import { Text, StyleSheet } from "react-native"; 

// import colors const
import Colors from "../constants/colors";

// ---------------
// Title Component
// ---------------

function Title(props) {
    // display content
    return <Text style={styles.title}>{props.children}</Text> // display passed text in title
}

export default Title;

// style sheet
const styles = StyleSheet.create({
    title: {
        fontSize: 33,
        textAlign: "center",
        color: Colors.accent500,
        fontFamily: "heavenmono"
    }
})