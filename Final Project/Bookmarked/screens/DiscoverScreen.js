import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

// import components
import BookList from "../components/List/BookList";
import Title from "../components/Title";

// import data
import { BOOKS } from "../data/dummy_data";

// import modal
import ISBNScanner from "../modals/ISBNScanner";

// import constants
import Colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";

// list of genre tags
const GENRES = ["sci-fi", "horror", "fantasy"];

// ---------------
// Discover Screen
// ---------------
function DiscoverScreen() {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  // states
  const [selectedGenre, setSelectedGenre] = useState("sci-fi");
  const [searchQuery, setSearchQuery] = useState("");
  const [scannerVisible, setScannerVisible] = useState(false);

  function handleScanned(isbn) {
    setSearchQuery(isbn); // populate search box with scanned isbn
  }

  // filter by search query if present, otherwise filter by genre
  const displayedBooks = searchQuery.trim()
    ? BOOKS.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.isbn.includes(searchQuery)
    )
  : BOOKS.filter((book) => book.genre === selectedGenre);

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
      <Title>Discover</Title>
      {/* search row */}
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by title or ISBN..."
          placeholderTextColor={Colors.primary200}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Pressable
          onPress={() => setScannerVisible(true)}
          style={styles.cameraButton}
        >
          <Entypo name="camera" size={24} color={Colors.primary100} />
        </Pressable>
      </View>

      {/* genre filters (only show when not searching) */}
      {!searchQuery.trim() && (
        <View style={styles.genreRow}>
          {GENRES.map((genre) => (
            <Pressable
              key={genre}
              onPress={() => setSelectedGenre(genre)}
              style={({ pressed }) => [
                styles.genreButton,
                selectedGenre === genre && styles.genreButtonActive,
                pressed && styles.genreButtonPressed,
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
      )}

      {/* display booklist with filtered books */}
      <BookList items={displayedBooks} />

      {/* isbn scanner modal */}
      <ISBNScanner
        visible={scannerVisible}
        onClose={() => setScannerVisible(false)}
        onScanned={handleScanned}
      />
    </View>
  );
}

export default DiscoverScreen;

// stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 10,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    height: 44,
    backgroundColor: Colors.primary600,
    borderRadius: 22,
    paddingHorizontal: 16,
    color: Colors.primary100,
    fontFamily: "playfair",
    fontSize: 15,
  },
  cameraButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary600,
    justifyContent: "center",
    alignItems: "center",
  },
  genreRow: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    gap: 8,
  },
  genreButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: Colors.primary600,
  },
  genreButtonActive: {
    backgroundColor: Colors.accent500,
  },
  genreButtonPressed: {
    opacity: 0.7,
  },
  genreButtonText: {
    color: Colors.primary200,
    textTransform: "capitalize",
  },
  genreButtonTextActive: {
    color: Colors.primary100,
  },
});
