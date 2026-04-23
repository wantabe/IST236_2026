import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function BookItem(props) {
    const navigation = useNavigation();

    function selectedBookHandler() {
        navigation.navigate("BookDetail", {
            bookId: props.id,
        });
    }

    // render
    return (
        <View
            style={[
                styles.itemContainer,
                { backgroundColor: props.listIndex % 2 == 0 ? "#1a1a2e" : "#16213e" },
            ]}
        >
            <Pressable onPress={selectedBookHandler}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.imageUrl }} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default BookItem;

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 5,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 7,
    },
    imageContainer: {
        height: 300
    },
    image: {
        height: "100%",
        resizeMode: "contain",
        borderRadius: 7,
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 10,
    },
    title: {
        fontSize: 20,
        fontFamily: "playfair",
        color: "#ffffff",
        paddingBottom: 6,
        textAlign: "center"
    },
    description: {
        fontSize: 15,
        fontFamily: "playfair",
        color: "#a0a0b0",
        paddingBottom: 8,
        textAlign: "center"
    }
})