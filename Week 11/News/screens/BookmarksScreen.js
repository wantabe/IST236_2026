import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";

// import dummy data
import { ARTICLES } from "../data/dummy_data";

// import context
import { BookmarksContext } from "../store/context/bookmarks-context";

// import components
import NewsList from "../components/List/NewsList";

// import constants
import Colors from "../constants/colors";

function BookmarksScreen (){
    const bookmarkedArticlesCtx = useContext(BookmarksContext);
    // filter dummy data to articles with matching ids to those bookmarked
    const bookmarkedArticles = ARTICLES.filter((newsItem) => {
        return bookmarkedArticlesCtx.ids.includes(newsItem.id);
    });

    // display text if no articles bookmarked
    if (bookmarkedArticles.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no saved articles yet!</Text>
        </View>
    } else {
        // otherwise display list of bookmarked articles
        return <NewsList items={bookmarkedArticles} />;
    }
}

export default BookmarksScreen;

// stylesheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
    },
    text: {
        fontSize: 28,
        textAlign: "center",
        fontFamily: "playfairBold",
        color: Colors.primary300,
    }
})