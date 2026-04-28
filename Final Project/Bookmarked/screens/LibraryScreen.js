import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useContext } from "react";

// import components
import BookList from "../components/List/BookList";

// import dummy data
import { BOOKS } from "../data/dummy_data";

// import context
import { BookmarksContext } from "../store/context/bookmarks-context";
import Title from "../components/Title";
import { ReadingProgressContext } from "../store/context/reading-progress-context";

// list of status filters
const FILTERS = ["all", "unread", "reading", "finished"];

// --------------
// Library Screen
// --------------
function LibraryScreen() {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  // filter selection state management
  const [selectedFilter, setSelectedFilter] = useState("all");
  // bookmark context
  const bookmarksCtx = useContext(BookmarksContext);
  // reading progress context
  const progressCtx = useContext(ReadingProgressContext);

  // filter data to only bookmarked books
  const bookmarkedBooks = BOOKS.filter((book) =>
    bookmarksCtx.ids.includes(book.id),
  );

  // filter books to their reading status
  const displayedBooks = bookmarkedBooks.filter((book) => {
    if (selectedFilter === "all") return true;
    return getBookStatus(book.id, book.pageCount) === selectedFilter;
  })

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
      <Title>Library</Title>
      {/* filter buttons */}
      <View style={styles.filterRow}>
        {FILTERS.map((filter) => (
          <Pressable
            key={filter}
            onPress={() => setSelectedFilter(filter)}
            style={({ pressed }) => [
              styles.filterButton,
              selectedFilter === filter && styles.filterButtonActive,
              pressed && styles.filterButtonPressed,
            ]}
          >
            <Text
              style={[
                styles.filterButtonText,
                selectedFilter === filter && styles.filterButtonTextActive,
              ]}
            >
              {filter}
            </Text>
          </Pressable>
        ))}
      </View>
      {/* filtered list of books */}
      <BookList items={displayedBooks} />
    </View>
  );
}

export default LibraryScreen;

// stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#16213e",
  },

  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: 10,
    gap: 8,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#1a1a2e",
  },
  filterButtonActive: {
    backgroundColor: "#4a90e2",
  },
  filterButtonPressed: {
    opacity: 0.7,
  },
  filterButtonText: {
    color: "#a0a0b0",
    textTransform: "capitalize",
  },
  filterButtonTextActive: {
    color: "#ffffff",
  },
});
