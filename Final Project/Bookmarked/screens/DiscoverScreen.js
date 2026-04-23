import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import BookList from "../components/List/BookList";
import { BOOKS } from "../data/dummy_data";

const GENRES = ["sci-fi", "horror", "fantasy"];

function DiscoverScreen() {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  // set which genre to display
  const [selectedGenre, setSelectedGenre] = useState("sci-fi");

  // filter dummy data to respective genre
  const displayedBooks = BOOKS.filter((book) => {
    return book.genre === selectedGenre;
  });

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
      <View style={styles.genreRow}>
        {GENRES.map((genre) => (
          <Pressable
            key={genre}
            onPress={() => setSelectedGenre(genre)}
            style={[
              styles.genreButton,
              selectedGenre === genre && styles.genreButtonActive,
            ]}
          >
            <Text
              style={[
                styles.genreButtonText,
                selectedGenre === genre && styles.genreButtonTextActive,
              ]}
            >
              {genre}
            </Text>
          </Pressable>
        ))}
      </View>
      <BookList items={displayedBooks} />
    </View>
  );
}

export default DiscoverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  genreRow: {
    flexDirection: "row",
    padding: 10,
    gap: 8,
  },
  genreButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: "#1a1a2e",
  },
  genreButtonActive: {
    backgroundColor: "#4a90e2",
  },
  genreButtonText: {
    color: "#a0a0b0",
    textTransform: "capitalize",
  },
  genreButtonTextActive: {
    color: "#ffffff",
  },
});
