import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useState, useContext, useLayoutEffect } from "react";
import Slider from "@react-native-community/slider";

// import dummy data
import { BOOKS } from "../data/dummy_data";

// import components
import BookmarkButton from "../components/BookmarkButton";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";

// import context
import { BookmarksContext } from "../store/context/bookmarks-context";

function BookDetailScreen(props) {
    const bookmarkedBooksCtx = useContext(BookmarksContext);

    const bookId = props.route.params.bookId;
    const selectedBook = BOOKS.find((book) => book.id === bookId);

    const bookIsBookmarked = bookmarkedBooksCtx.ids.includes(bookId);

    function changeBookmarkStatusHandler() {
        if (bookIsBookmarked) {
            bookmarkedBooksCtx.removeBookmark(bookId);
        } else {
            bookmarkedBooksCtx.addBookmark(bookId);
        }
    }

    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: "",
            headerRight: () => {
                return (
                    <BookmarkButton
                        pressed={bookIsBookmarked}
                        onPress={changeBookmarkStatusHandler}
                    />
                );
            },
        });
    }, [props.navigation, changeBookmarkStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: selectedBook.imageUrl }}
                />
            </View>

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{selectedBook.title}</Text>

                <View style={styles.metaRow}>
                    <Text style={styles.author}>{selectedBook.author}</Text>
                    <Text style={styles.metaDivider}> · </Text>
                    <Text style={styles.rating}>{selectedBook.rating}</Text>
                </View>

                <View style={styles.progressContainer}>
                    <Slider></Slider>
                </View>

                <View style={styles.buttonContainer}>
                    <NavButton>Add to List</NavButton>
                </View>

                <View style={styles.bottomContainer}>
                    <ScrollView style={styles.descGenreContainer}>
                        <View style={styles.descContainer}>
                            <Text style={styles.description}>{selectedBook.description}</Text>
                        </View>
                        <View style={styles.genreContainer}>
                            <Text style={styles.genre}>{selectedBook.genre}</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default BookDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "#0f0f1a",
    },

    imageContainer: {
        marginVertical: 10,
        height: 300,
        paddingHorizontal: 10,
    },
    image: {
        height: "100%",
        resizeMode: "contain",
        borderRadius: 7,
    },
    
    infoContainer: {
        borderRadius: 7,
        backgroundColor: Colors.primary500o8,
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    title: {
        color: Colors.primary300,
        fontSize: 24,
        fontFamily: "playfair",
        paddingBottom: 10,
        textAlign: "center",
    },
    metaRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 4,
    },
    author: {
        color: Colors.primary300,
        fontSize: 18,
        fontFamily: "playfair",
    },
    metaDivider: {
        color: Colors.primary300,
        fontSize: 18,
    },
    rating: {
        color: Colors.primary300,
        fontSize: 18,
        fontFamily: "playfair",
    },
    
    progressContainer: {
        backgroundColor: "white",
        borderRadius: 7,
    },
    
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginTop: 10,
        borderRadius: 7,
    },

    bottomContainer: {
        
    },
    descGenreContainer: {
        margin: 10,
    },
    descContainer: {

    },
    description: {
        color: Colors.primary300,
        fontSize: 18,
        fontFamily: "playfair",
    },
    genreContainer: {
        alignItems: "center",
        marginTop: 10,
    },
    genre: {
        color: Colors.primary300,
        fontSize: 16,
        fontFamily: "playfair",
    },
});