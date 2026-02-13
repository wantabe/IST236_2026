// react/react native imports
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Image, Linking, Text } from "react-native";

// import components
import Title from "../components/Title";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";



function HomeScreen(props) {
    // set safe area screen boundaries
    const insets = useSafeAreaInsets();
    // display content
    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}>

            <View style={styles.titleContainer}>
                <Title>Carolina Roadhouse</Title>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/restaurant.jpg")} />
            </View>

            <View style={styles.infoContainer}>
                <Text
                style={styles.infoText}
                onPress={() => Linking.openURL("tel:8434979911")} // open phone app on press
                >(843) 497-9911</Text>

                <Text
                style={[
                    styles.infoText, // underline website text
                    {
                        textDecorationLine: "underline"
                    }                    
                ]}
                onPress={() => Linking.openURL("https://carolinaroadhouse.com/")} // open website on press
                >www.carolinaroadhouse.com</Text>

                <Text
                style={styles.infoText}
                onPress={() => Linking.openURL("https://maps.app.goo.gl/5MU41GTiCjUymAg67")} // open google maps on press
                >4617 N Kings Hwy{"\n"}Myrtle Beach{"\n"}SC, 29577</Text>
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>View Menu</NavButton>{/*open menu screen*/}
            </View>

        </View>
    )
}

export default HomeScreen;

// style sheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
    },

    titleContainer: {
        flex: 2,
        justifyContent: "center",
        borderWidth: 3,
        borderRadius: 5,
        width: 395,
        borderColor: Colors.accent500,
        backgroundColor: Colors.primary800,
        marginBottom: 10,
    },

    imageContainer: {
        flex: 5,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: Colors.accent500
    },
    image: {
        resizeMode: "cover",
        height: "100%",
        width: 390
    },

    infoContainer: {
        flex: 7,
        justifyContent: "top",
        paddingTop: 40
    },
    infoText: {
        fontSize: 24,
        textAlign: "center",
        padding: 3,
        paddingBottom: 10,
        color: Colors.accent500,
        fontFamily: "heavenmono"
    },

    buttonContainer: {
        flex: 1,
        alignItems: "center"
    }
})