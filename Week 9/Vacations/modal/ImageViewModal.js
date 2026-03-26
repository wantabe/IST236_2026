// library imports
import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";

function ImageViewModal(props) {
  // render modal screen with passed in data
  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} /> {/* destination image */}
          <View style={styles.descContainer}>
            <Text style={styles.description}>{props.destination.toString()}</Text> {/* destination description */}
          </View>          
          <Button title="Return to Destinations" onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

// stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8B4513",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  descContainer: {
    marginBottom: 20,
  },
  description: {
    color: "white",
    fontFamily: "vacation",
    fontSize: 18,
    textAlign: "center",
    marginTop: 12,
    paddingHorizontal: 16,
  },
});
