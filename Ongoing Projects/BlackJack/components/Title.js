import { Text, StyleSheet, useWindowDimensions } from "react-native"; 
import Colors from "../constants/colors";


// ---------------
// Title Component
// ---------------

function Title(props) {
    const { width, height } = useWindowDimensions();

    // if in portrait, base size on screen width
    let size = width * 0.2;
    // if in landscape, base size on screen height
    if (width > height) {
        size = height * 0.13;
    }

    // display passed in title
    return <Text style={[styles.title, {fontSize: size}]}>{props.children}</Text>
}

export default Title;

// stylesheet
const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "poker"
    },
});