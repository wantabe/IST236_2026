import { View, Text, Image, StyleSheet } from "react-native";

function MovieItem(props) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.itemTitle}>{props.name}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.itemImage} source={props.image}/>
            </View>
            <View style={styles.rankContainer}>
                <Text style={styles.itemRank}>Rank: {props.rank} / 10</Text>
            </View>
        </View>
    );
}

export default MovieItem;

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20,
        borderWidth: 1
    },

    titleContainer: {
        backgroundColor: "white",
        borderWidth: 3,
    },
    itemTitle: {
        fontSize: 25,
        textAlign: "center",
        fontWeight: "bold"
    },

    imageContainer: {
        alignItems: "center",
        borderWidth: 3,
    },
    itemImage: {
        width: "100%",
        height: 500,
        resizeMode: "cover"
    },

    rankContainer: {
        backgroundColor: "white",
        borderWidth: 3,
    },
    itemRank: {
        fontSize: 25,
        textAlign: "center"
    }
});