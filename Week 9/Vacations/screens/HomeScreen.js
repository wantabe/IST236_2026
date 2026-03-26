// library imports
import { View, FlatList } from "react-native";

// import data
import { COUNTRIES } from "../data/data";

// import components
import CountryGridTile from "../components/CountryGridTile";

function HomeScreen(props) {
    // function to render each country item
    function renderCountryItem(itemData) {
        // function to handle presses
        function pressHandler() {
            // navigate to overview screen on press with selected countryid
            props.navigation.navigate("DestinationsOverviewScreen", {
                countryId: itemData.item.id,
            })
        }
        
        return (
            // display a country grid tile with passed in data
            <CountryGridTile 
                name={itemData.item.name}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        // display flatlist of countries in a grid
        <View>
            <FlatList 
                data={COUNTRIES}
                keyExtractor={(item) => {
                    return item.id
                }}
                renderItem={renderCountryItem}
                numColumns={2}
            />
        </View>
    )
}

export default HomeScreen;