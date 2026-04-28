import { View, StyleSheet, FlatList } from "react-native";

// import bookitem component
import BookItem from "./BookItem";

// ------------------
// BookList Component
// ------------------
function BookList(props) {
    function renderBookItem(itemData) {
        const bookItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            author: itemData.item.author,
            description: itemData.item.description,
            imageUrl: itemData.item.imageUrl,
            listindex: itemData.index,
        };
        return <BookItem {...bookItemProps} />;
    }

    // -------
    // Display
    // -------
    return (
        <View style={styles.container}>
            <FlatList
                data={props.items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderBookItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default BookList;

// stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#0f0f1a",
    }
});