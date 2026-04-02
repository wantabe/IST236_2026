import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useState, useLayoutEffect } from "react";
import { ARTICLES } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";

function NewsDetailScreen(props) {
  const articleId = props.route.params.articleId;
  const selectedArticle = ARTICLES.find((article) => article.id === articleId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedArticle.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>{selectedArticle.headline}</Text>

        <View style={styles.metaRow}>
          <Text style={styles.agency}>{selectedArticle.agency}</Text>
          <Text style={styles.metaDivider}> · </Text>
          <Text style={styles.date}>{selectedArticle.date}</Text>
        </View>

        <Text style={styles.author}>By {selectedArticle.author}</Text>

        <Text style={styles.description}>{selectedArticle.description}</Text>
      </View>
    </ScrollView>
  );
}

export default NewsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#0f0f1a",
  },
  imageContainer: {
    marginVertical: 10,
    height: 250,
    paddingHorizontal: 10,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headline: {
    color: Colors.primary300,
    fontSize: 24,
    fontFamily: "playfairBold",
    paddingBottom: 10,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 4,
  },
  agency: {
    color: Colors.primary300,
    fontSize: 14,
    fontFamily: "playfairBold",
  },
  metaDivider: {
    color: Colors.primary300,
    fontSize: 14,
  },
  date: {
    color: Colors.primary300,
    fontSize: 14,
    fontFamily: "playfair",
  },
  author: {
    color: Colors.primary300,
    fontSize: 14,
    fontFamily: "playfair",
    paddingBottom: 16,
  },
  description: {
    color: Colors.primary300,
    fontSize: 15,
    fontFamily: "playfair",
    textAlign: "justify",
    lineHeight: 24,
    paddingBottom: 30,
  },
});