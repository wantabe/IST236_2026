// react native imports
import { StyleSheet, View, Text, Image } from "react-native";

// import colors const
import Colors from "../constants/colors";


function MenuItems(props) {
    // display content
    return(
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={props.image} />
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
    )
}

export default MenuItems;

// style sheet
const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: Colors.accent500
    },

    titleContainer: {
        backgroundColor: Colors.primary500,
        borderWidth: 3,
        borderColor: Colors.accent500,
        padding: 10,
        backgroundColor: Colors.primary800
    },
    title: {
        fontSize: 25,
        textAlign: "center",
        fontFamily: "heavenmono",
        color: Colors.accent500
    },

    imageContainer: {
        alignItems: "center",
        backgroundColor: "black"
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "cover"
    },

    priceContainer: {
        backgroundColor: Colors.primary500,
        borderWidth: 3,
        borderColor: Colors.accent500,
        backgroundColor: Colors.primary800
    },
    price: {
        fontSize: 35,
        textAlign: "center",
        fontFamily: "heavenmono",
        color: Colors.accent500
    }
})