// library imports
import { useState } from "react";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";

// import constants
import Colors from "../constants/colors";

// import components
import ImageViewModal from "../modal/ImageViewModal";



function DestinationItem(props) {
    // modal display handler
    const [modalIsVisible, setModalIsVisible] = useState(false);

    // function to display modal
    function viewImageHandler() {
        setModalIsVisible(true);
    }

    // function to close modal
    function closeImageHandler() {
        setModalIsVisible(false);
    }

    // render
    return (
        // alternate item coloring based on index
        <View style={[
            styles.itemContainer,
            { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
        ]}>
            {/* visual feedback when pressed */}
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]}
                android_ripple={{ color: Colors.primary300 }}
                onPress={viewImageHandler} // display modal when pressed
            >
                <View style={styles.rowContainer}>
                    <Image style={styles.image} source={{ uri: props.imageUrl }} /> {/* load image from url */}
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{props.name}</Text> {/* name of destination */}
                        <View style={styles.innerRowContainer}>
                            <Text style={styles.cost}>Average Cost: ${props.cost}</Text> {/* average cost of destination */}
                            <Text style={styles.year}>{props.foundedYear}</Text> {/* year destination was founded */}
                        </View>
                        <Text style={styles.rating}>Rating: {props.rating} / 5</Text> {/* rating of destination */}
                    </View>
                </View>
            </Pressable>

            {/* pass relevant data to modal */}
            <ImageViewModal 
                isVisible={modalIsVisible}
                imageUrl={props.imageUrl}
                destination={props.destination}
                onClose={closeImageHandler}
            />
        </View>
    )
}

export default DestinationItem;

// stylesheet
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#ccc",
        paddingHorizontal: 5,
        paddingTop: 3,
        marginBottom: 3,
        borderRadius: 7,
    },

    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },

    rowContainer: {
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    
    image: {
        width: "25%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 15,
    },

    infoContainer: {
        width: "75%",
        paddingLeft: 20,
    },
    name: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 20,
    },
    sites: {
        width: "85%",
        fontSize: 14,
    },
    year: {
        fontSize: 14,
        fontWeight: "bold",
    },

    innerRowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rating: {
        fontSize: 13,
        fontStyle: "italic",
    }
})