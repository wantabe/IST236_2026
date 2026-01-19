import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, Image, Linking} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/restaurant.jpg")}/>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Carolina Roadhouse</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://www.google.com/url?sa=t&source=web&rct=j&url=https://carolinaroadhouse.com/&ved=2ahUKEwiZz9OnqpiSAxX2GFkFHYwAD-8QkBR6BAhTEAE&opi=89978449&usg=AOvVaw0fV6ChhSNwgK0rHFNsTz31")}>www.carolinaroadhouse.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:8434979911")}>(843) 497-9911</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://maps.app.goo.gl/5MU41GTiCjUymAg67")}>Open in Google Maps</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#184e38",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 2,
    paddingTop: 50,
    width: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#000000",
  },
  informationContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 10,
    color: "white",
  }
});
