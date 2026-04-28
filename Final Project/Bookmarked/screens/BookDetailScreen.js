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

// import contexts
import { BookmarksContext } from "../store/context/bookmarks-context";
import { ReadingProgressContext } from "../store/context/reading-progress-context";

// import modal
import AddToList from "../modals/AddToList";
import LogSession from "../modals/LogSession";

// -----------------
// BookDetail Screen
// -----------------
function BookDetailScreen(props) {
    // get the contexts
    const bookmarkedBooksCtx = useContext(BookmarksContext);
    const progressCtx = useContext(ReadingProgressContext);

    // get the selected book id
    const bookId = props.route.params.bookId;

    // get the current reading progress
    const currentProgress = progressCtx.getProgress(bookId);    

    // get the book from the sample data using its id
    const selectedBook = BOOKS.find((book) => book.id === bookId);

    // check if book is bookmarked using context
    const bookIsBookmarked = bookmarkedBooksCtx.ids.includes(bookId);

    // handle bookmark toggling
    function changeBookmarkStatusHandler() {
        if (bookIsBookmarked) {
            bookmarkedBooksCtx.removeBookmark(bookId);
        } else {
            bookmarkedBooksCtx.addBookmark(bookId);
        }
    }

    // bookmark icon display/update
    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: "",
            headerStyle: { backgroundColor: Colors.primary600 },
            headerTintColor: Colors.accent500,
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

    // handle addtolist modal
    const [modalIsVisible, setModalIsVisible] = useState(false);
    function addToListHandler() { // open the modal
        setModalIsVisible(true);
    }
    function closeAddToListHandler() { // close the modal
        setModalIsVisible(false);
    }

    // handle logsession modal
    const [logSessionVisible, setLogSessionVisible] = useState(false);
    function openLogSessionHandler() { // open the modal
        setLogSessionVisible(true);
    }
    function closeLogSessionHandler() { // close the modal
        setLogSessionVisible(false);
    }

    // -------
    // Display
    // -------
    return (
        <View style={styles.rootContainer}>
            {/* book image */}
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: selectedBook.imageUrl }}
                />
            </View>            

            {/* book info */}
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{selectedBook.title}</Text>

                <View style={styles.metaRow}>
                    <Text style={styles.author}>{selectedBook.author}</Text>
                    <Text style={styles.metaDivider}> · </Text>
                    <Text style={styles.rating}>{selectedBook.rating} / 5</Text>
                </View>

                {/* reading progress */}
                <View style={styles.progressContainer}>
                    <Slider
                        minimumValue={0}
                        maximumValue={selectedBook.pageCount}
                        value={currentProgress.currentPage}
                        minimumTrackTintColor={Colors.accent300}
                        maximumTrackTintColor={Colors.accent500}
                        thumbTintColor={Colors.accent500}
                        disabled={true}
                    />
                    <Text style={styles.progressText}>
                        {currentProgress.currentPage} / {selectedBook.pageCount} pages
                    </Text>
                </View>

                {/* log reading session/add to list */}
                <View style={styles.buttonContainer}>
                    <NavButton onPress={openLogSessionHandler}>Log Session</NavButton>
                    <NavButton onPress={addToListHandler}>Add to List</NavButton>
                </View>

                {/* log session modal */}
                <LogSession
                    visible={logSessionVisible}
                    onClose={closeLogSessionHandler}
                    bookId={bookId}
                    pageCount={selectedBook.pageCount}
                />

                {/* add to list modal */}
                <AddToList
                    visible={modalIsVisible}
                    onClose={closeAddToListHandler}
                    bookId={bookId}
                />

                {/* bottom info */}
                <View style={styles.bottomContainer}>
                    <ScrollView style={styles.descGenreContainer}>
                        <View style={styles.descContainer}>
                            <Text style={styles.description}>{selectedBook.description}</Text>
                        </View>
                    </ScrollView>
                        <View style={styles.genreContainer}>
                            <Text style={styles.genre}>{selectedBook.genre}</Text>
                        </View>                    
                </View>
            </View>
        </View>
    );
}

export default BookDetailScreen;

// stylesheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.primary500,
    },

    imageContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
        height: 250,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: Colors.primary500,
    },
    image: {
        height: "100%",
        resizeMode: "contain",
        borderRadius: 20,
    },
    
    infoContainer: {
        borderRadius: 7,
        backgroundColor: Colors.primary600o8,
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    title: {
        color: Colors.primary100,
        fontSize: 24,
        fontFamily: "playfairBold",
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
        color: Colors.primary100,
        fontSize: 18,
        fontFamily: "playfair",
    },
    metaDivider: {
        color: Colors.primary100,
        fontSize: 18,
    },
    rating: {
        color: Colors.primary100,
        fontSize: 18,
        fontFamily: "playfair",
    },
    
    progressContainer: {
        backgroundColor: Colors.primary300,
        borderRadius: 7,
    },
    progressText: {
        color: Colors.primary200,
        fontFamily: "playfair",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 5,
    },
    
    buttonContainer: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        backgroundColor: Colors.primary500,
        borderRadius: 10,
        marginBottom: 10,
    },

    bottomContainer: {
        backgroundColor: Colors.primary500o8,
        borderRadius: 10
    },
    descGenreContainer: {
        margin: 10,
        maxHeight: 240,
    },
    descContainer: {
        backgroundColor: Colors.primary600o8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10
    },
    description: {
        color: Colors.primary100,
        fontSize: 18,
        fontFamily: "playfair",
    },
    genreContainer: {
        alignItems: "center",
        paddingBottom: 10,
    },
    genre: {
        color: Colors.primary100,
        fontSize: 15,
        fontFamily: "playfair",
        textTransform: "capitalize",
    },
});