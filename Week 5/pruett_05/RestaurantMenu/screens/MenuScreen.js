// react/react native imports
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, FlatList, Text, } from "react-native";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import MenuItems from "../components/MenuItems";

// import colors const
import Colors from "../constants/colors";



function MenuScreen(props) {
    // set safe area screen boundaries
    const insets = useSafeAreaInsets();

    // array of menu items
    const [menuItems, setMenuItems] = useState([
        {
            name: "Baby Back Ribs",
            image: require("../assets/images/ribs.jpg"),
            price: "$23.95",
            id: 1
        },
        {
            name: "Ribeye Steak",
            image: require("../assets/images/ribeye.jpg"),
            price: "$38.95",
            id: 2
        },
        {
            name: "Honey Butter Croissants",
            image: require("../assets/images/croissants.jpg"),
            price: "$6.95",
            id: 3
        },
        {
            name: "Chicken Strips Platter",
            image: require("../assets/images/tenders.jpg"),
            price: "$18.95",
            id: 4
        },
        {
            name: "Crab Dip",
            image: require("../assets/images/crabdip.jpg"),
            price: "$17.95",
            id: 5
        },
    ]);

    // display content
    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            },
        ]}>

            <View style={styles.titleContainer}>
                <Title>Menu</Title>
            </View>

            <View style={styles.listContainer}>
                <FlatList
                    // pass menu items to flatlist
                    data={menuItems}
                    // use item's id for key extractor
                    keyExtractor={(item) => item.id}
                    // visual styling
                    alwaysBounceVertical={false}
                    showsVerticalScrollIndicator={false}
                    // render each menu item
                    renderItem={(itemData) => {
                        return(
                            <MenuItems
                                name={itemData.item.name}
                                image={itemData.item.image}
                                price={itemData.item.price}
                            />
                        );
                    }}
                    />
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>Home Page</NavButton>{/*pass onNext to nav button*/}
            </View>

        </View>
    )
}

export default MenuScreen;

// style sheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        width: 390,
        alignItems: "center"
    },

    titleContainer: {
        flex: 1,
        justifyContent: "center",
        borderWidth: 3,
        borderRadius: 5,
        borderColor: Colors.accent500,
        backgroundColor: Colors.primary800,
        marginBottom: 10,
        width: 370
    },

    listContainer: {
        flex: 7,
        width: "95%"
    },

    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end"
    }
})