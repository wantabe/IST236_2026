import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { CAMPGROUNDS, STATES } from "../data/dummy-data";

// import components
import CampgroundItem from "../components/CampgroundItem";

function CampgroundsOverviewScreen(props) {
    const stateId = props.route.params.stateId; // get state id from props

    useLayoutEffect(() => {
        const state = STATES.find((state) => state.id === stateId); // find the state id from STATES data that matches the passed stateid prop
        props.navigation.setOptions({title: state ? state.name : null}) // display the title of the matching state if state not null, otherwise title is null
    }, [stateId, props.navigation]);

    // return campground item with matching stateid
    const displayedCampgrounds = CAMPGROUNDS.filter((campgroundItem) => {
        return campgroundItem.stateId === stateId;
    });

    // render the campground item
    function renderCampgroundItem(itemData) {
        const campgroundItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            numSites: itemData.item.numSites,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index
        }

        return <CampgroundItem {...campgroundItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedCampgrounds}
                keyExtractor={(item) => item.id}
                renderItem={renderCampgroundItem}
            />
        </View>
    );
}

export default CampgroundsOverviewScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 16,
    }
})