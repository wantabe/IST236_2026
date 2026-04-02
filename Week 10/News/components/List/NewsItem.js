import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NewsItem(props) {
  const navigation = useNavigation();

  function selectedArticleHandler() {
    navigation.navigate("NewsDetail", {
      articleId: props.id,
    });
  }

  // render
  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#1a1a2e" : "#16213e" },
      ]}
    >
      <Pressable onPress={selectedArticleHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default NewsItem;

// stylesheet
const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  imageContainer: {
    height: 200,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  headline: {
    fontSize: 18,
    fontFamily: "playfairBold",
    color: "#ffffff",
    paddingBottom: 6,
  },
  date: {
    fontSize: 13,
    fontFamily: "playfair",
    color: "#a0a0b0",
    paddingBottom: 8,
  },
});