import { View, Button, StyleSheet, Text } from "react-native";

// import constants
import Colors from "../constants/colors";


// ---------------------
// Recipe Item Component
// ---------------------

function RecipeItem(props) {
    return (
        // display recipe with passed in info
        <View style={styles.item}>
            <View style={styles.itemTitleContainer}>
                <Text style={styles.itemTitle}>{props.title}</Text>
            </View>

            {/*display view/delete buttons*/}
            <View style={styles.itemButtonContainer}>
                <View style={styles.button}>
                    <Button title="View" onPress={props.onView} />
                </View>
                <View style={styles.button}>
                    <Button title="Delete" onPress={props.onDelete} />
                </View>
            </View>
        </View>
    );
}

export default RecipeItem;

// stylesheet
const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 8,
        borderRadius: 6,
        backgroundColor: Colors.secondary800,
        borderColor: Colors.accent500,
        borderWidth: 2,
    },
    itemTitleContainer: {
        justifyContent: "center",
    },
    itemTitle : {
        fontFamily: "onestRegular",
        fontSize: 25,
        color: Colors.primary500,
        padding: 10,
    },
    itemButtonContainer: {
        flexDirection: "row",
    },
    button: {
        marginVertical: 5,
        marginHorizontal: 3,
    },
});