// library imports
import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

// import data
import { DESTINATIONS, COUNTRIES } from "../data/data";

// import components
import DestinationItem from "../components/DestinationItem";

function DestinationsOverviewScreen(props) {
    const countryId = props.route.params.countryId; // get countryid from props

    useLayoutEffect(() => {
        const country = COUNTRIES.find((country) => country.id === countryId); // find the countryid from COUNTRIES data that matches the passed countryid prop
        props.navigation.setOptions({title: country ? country.name : null}) // display the title of the matching country if not null
    }, [countryId, props.navigation]);

    // return destination items with matching countryid
    const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
        return destinationItem.countryId === countryId;
    });

    // render the destination item
    function renderDestinationItem(itemData) {
        const destinationItemProps = {
            destination: itemData.item,
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            cost: itemData.item.cost,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index
        }

        // return destinationitem with passed in props
        return <DestinationItem {...destinationItemProps} />
    }

    return (
        // render flatlist of destinations
        <View style={styles.container}>
            <FlatList 
                data={displayedDestinations}
                keyExtractor={(item) => item.id}
                renderItem={renderDestinationItem}
            />
        </View>
    );
}

export default DestinationsOverviewScreen;

// stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})