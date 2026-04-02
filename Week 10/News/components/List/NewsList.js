import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";

function NewsList(props) {
  function renderNewsItem(itemData) {
    const newsItemProps = {
      id: itemData.item.id,
      headline: itemData.item.headline,
      date: itemData.item.date,
      imageUrl: itemData.item.imageUrl,
      listIndex: itemData.index,
    };
    return <NewsItem {...newsItemProps} />;
  }

  // render
  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNewsItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default NewsList;

// stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#0f0f1a",
  },
});