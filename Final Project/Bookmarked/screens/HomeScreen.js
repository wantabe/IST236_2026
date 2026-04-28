import { View, Text, StyleSheet, Pressable, ScrollView, Image } from "react-native";
import { useContext } from "react";
import Slider from "@react-native-community/slider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";

// import contexts
import { ListsContext } from "../store/context/lists-context";
import { ReadingProgressContext } from "../store/context/reading-progress-context";

// import book data
import { BOOKS } from "../data/dummy_data";


// -----------
// Home Screen
// -----------
function HomeScreen(props) {
    // set safe area boundaries
    const insets = useSafeAreaInsets();

    // navigation
    const navigation = useNavigation();

    // get contexts
    const listsCtx = useContext(ListsContext);
    const progressCtx = useContext(ReadingProgressContext)

    function selectedListHandler(id) {
        navigation.navigate("ListDetail", {
            listId: id,
        });
    }

    // function to get book status
    function getBookStatus(bookId, pageCount) {
        // get progress from context
        const progress = progressCtx.getProgress(bookId);
        // current page is 0, "unread"
        if (progress.currentPage <= 0) {
            return "unread";
        } else if (progress.currentPage >= pageCount) { // current page = page count, "finished"
            return "finished";
        } else {
            return "reading"; // current page > 0, < page count, "reading"
        }
    }

    // books read count
    let booksRead = 0;
    BOOKS.forEach(book => {
        if (getBookStatus(book.id, book.pageCount) === "finished") {
            booksRead++;
        }
    });

    // total pages read
    let totalPages = 0;
    BOOKS.forEach(book => {
        const progress = progressCtx.getProgress(book.id);
        if (progress) {
            totalPages += progress.currentPage;
        }
    });

    // currently reading (most recently updated book that is "reading" status)
    let currentlyReading = null;
    let mostRecent = 0;
    BOOKS.forEach(book => {
        const progress = progressCtx.getProgress(book.id);
        if (
            getBookStatus(book.id, book.pageCount) === "reading" &&
            progress.lastUpdated > mostRecent
        ) {
            mostRecent = progress.lastUpdated;
            currentlyReading = book;
        }
    });

    // get reading progress of currently reading book
    const currentProgress = currentlyReading
        ? progressCtx.getProgress(currentlyReading.id)
        : null;

    // -------
    // Display
    // -------
    return (
        <View
              style={[
                styles.rootContainer,
                {
                  paddingTop: insets.top,
                  paddingBottom: insets.bottom,
                  paddingLeft: insets.left,
                  paddingRight: insets.right,
                },
              ]}
            >
            {/* title */}
            <Title>Bookmarked</Title>

            {/* currently reading card */}
            <View style={styles.currentlyReadingCard}>
                <Text style={styles.currentlyReadingLabel}>Currently Reading</Text>
                {currentlyReading ? (
                    // link to bookdetail screen of current book
                    <Pressable onPress={() => navigation.navigate("BookDetail", { bookId: currentlyReading.id })}>
                        <View style={styles.currentlyReadingRow}>
                            <Image
                                style={styles.currentlyReadingImage}
                                source={{ uri: currentlyReading.imageUrl }}
                            />
                            <View style={styles.currentlyReadingInfo}>
                                <Text style={styles.currentlyReadingTitle}>{currentlyReading.title}</Text>
                                <Text style={styles.currentlyReadingAuthor}>{currentlyReading.author}</Text>
                            </View>                            
                        </View>
                        {/* slider derives progress from pages read/page count */}                  
                        <Slider
                            style={styles.progressBarFill}
                            minimumValue={0}
                            maximumValue={currentlyReading.pageCount}
                            value={currentProgress.currentPage}
                            minimumTrackTintColor={Colors.accent300}
                            maximumTrackTintColor={Colors.primary600}
                            thumbTintColor={Colors.accent500}
                            disabled={true}
                        />
                        <Text style={styles.progressText}>
                            {currentProgress.currentPage} / {currentlyReading.pageCount} pages
                        </Text>
                    </Pressable>
                ) : (
                    <Text style={styles.currentlyReadingAuthor}>No book in progress</Text>
                )}
            </View>

            {/* reading stats */}
            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>{booksRead}</Text>
                    <Text style={styles.statLabel}>Books Read</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>{listsCtx.lists.length}</Text>
                    <Text style={styles.statLabel}>Lists Created</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>{totalPages}</Text>
                    <Text style={styles.statLabel}>Pages Read</Text>
                </View>
            </View>
            
            {/* my lists section */}
            <Text style={styles.sectionLabel}>My Lists</Text>
            <ScrollView style={styles.listContainer}>
                <View style={styles.navButtonGrid}>
                {listsCtx.lists.map((list) => (
                    <NavButton 
                        key={list.id} 
                        onPress={() => selectedListHandler(list.id)}
                    >
                        {list.label}
                    </NavButton>
                ))}
            </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

// stylesheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.primary500,
    },

    currentlyReadingCard: {
        margin: 16,
        padding: 16,
        borderRadius: 10,
        backgroundColor: Colors.primary600,
    },
    currentlyReadingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
    },
    currentlyReadingInfo: {
        flex: 1,
        alignItems: "flex-end",
        paddingRight: 10,
    },
    currentlyReadingImage: {
        width: 70,
        height: 100,
        borderRadius: 5,
        resizeMode: "cover",
    },
    currentlyReadingLabel: {
        fontSize: 13,
        fontFamily: "playfairBold",
        color: Colors.primary200,
        marginBottom: 6,
    },
    currentlyReadingTitle: {
        fontSize: 18,
        color: Colors.primary100,
        fontFamily: "playfairBold",
        marginBottom: 4,
    },
    currentlyReadingAuthor: {
        fontSize: 14,
        fontFamily: "playfairBoldItalic",
        color: Colors.primary200,
        marginBottom: 12,
    },

    progressBarBackground: {
        height: 6,
        borderRadius: 5,
        backgroundColor: Colors.accent800,
    },
    progressBarFill: {
        width: 350, 
        height: 7, 
        backgroundColor: Colors.accent800, 
        borderRadius: 5
    },
    progressText: {
        color: Colors.primary200,
        fontSize: 14,
        textAlign: "center",
        fontFamily: "playfair",
    },

    statsContainer: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginBottom: 16,
        gap: 8,
    },
    statBox: {
        flex: 1,
        padding: 12,
        borderRadius: 10,
        backgroundColor: Colors.primary600,
        alignItems: "center",
    },
    statNumber: {
        fontSize: 22,
        color: Colors.primary100,
        fontFamily: "playfair",
    },
    statLabel: {
        fontSize: 11,
        color: Colors.primary200,
        textAlign: "center",
        marginTop: 4,
    },

    listContainer: {
        backgroundColor: Colors.primary600,
        marginHorizontal: 10,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 30,
    },
    sectionLabel: {
        fontSize: 16,
        color: Colors.primary100,
        fontFamily: "playfair",
        marginHorizontal: 16,
        marginBottom: 10,
    },
    navButtonGrid: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 16,
        gap: 8,
    },
});