import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/image.jpg")}/>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Park Pruett</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("mailto:ppruett@hgtc.edu")}>ppruett@hgtc.edu</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:8435608477")}>(843) 560-8477</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/wantabe/IST236_2026")}>GitHub Repository</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 3,
    paddingTop: 50,
    width: "100%",
  },
  image: {
    height: 500,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#19314b",
  },
  informationContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
    color: "black",
  }
});
