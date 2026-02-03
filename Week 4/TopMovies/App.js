import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

import MovieItem from "./components/MovieItem";

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "The Thing",
      image: require("./assets/images/thing.jpg"),
      rank: "1",
    },
    {
      name: "No Country for Old Men",
      image: require("./assets/images/ncfom.jpg"),
      rank: "2",
    },
    {
      name: "Inglourious Basterds",
      image: require("./assets/images/ingbas.jpg"),
      rank: "3",
    },
    {
      name: "There Will Be Blood",
      image: require("./assets/images/twbb.jpg"),
      rank: "4",
    },
    {
      name: "The Empire Strikes Back",
      image: require("./assets/images/empire.jpg"),
      rank: "5",
    },
    {
      name: "Burning",
      image: require("./assets/images/burning.jpg"),
      rank: "6",
    },
    {
      name: "Fargo",
      image: require("./assets/images/fargo.jpg"),
      rank: "7",
    },
    {
      name: "The Holy Grail",
      image: require("./assets/images/holygrail.jpg"),
      rank: "8",
    },
    {
      name: "Hereditary",
      image: require("./assets/images/hereditary.png"),
      rank: "9",
    },
    {
      name: "Interstellar",
      image: require("./assets/images/interstellar.jpg"),
      rank: "10",
    },
    
  ]);

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          <FlatList
          data={movieItems}
          renderItem={({item}) => <MovieItem name={item.name} image={item.image} rank={item.rank} />}
          keyExtractor={item => item.rank}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#1e5d75",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 20,
    paddingHorizontal: 45,
    borderWidth: 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold"
  },

  listContainer: {
    flex: 8,
    width: "80%"
  }
});
