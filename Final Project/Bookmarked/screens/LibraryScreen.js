import { View, Text, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useContext } from "react";

// import components
import BookList from "../components/List/BookList";

// import dummy data
import { BOOKS } from "../data/dummy_data";

// import context
import { BookmarksContext } from "../store/context/bookmarks-context";

const FILTERS = ["all", "reading", "finished"];

function LibraryScreen() {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  // filter selection state management
  const [selectedFilter, setSelectedFilter] = useState("all");
  // bookmark context
  const bookmarksCtx = useContext(BookmarksContext);

  // filter data to only bookmarked books
  const bookmarkedBooks = BOOKS.filter((book) =>
    bookmarksCtx.ids.includes(book.id),
  );

  // apply reading/finished filter
  const displayedBooks =
    selectedFilter === "all"
      ? bookmarkedBooks
      : bookmarkedBooks.filter((book) => book.status === selectedFilter);

  // render
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
      <BookList items={displayedBooks} />
    </View>
  );
}

export default LibraryScreen;

// stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
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
