import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

// import constants
import Colors from "../constants/colors";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// --------------
// EditList Modal
// --------------
function EditList({ visible, onClose, onSave, currentLabel, currentDesc }) {
  // states
  const [label, setLabel] = useState(currentLabel || "");
  const [desc, setDesc] = useState(currentDesc || "");

  // handle saving
  function saveHandler() {
    onSave(label, desc);
    onClose();
  }
  // handle cancel
  function cancelHandler() {
    // reset back to original values
    setLabel(currentLabel || "");
    setDesc(currentDesc || "");
    onClose();
  }

  // -------
  // Display
  // -------
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Title>Edit List</Title>
          
          {/* inputs */}
          <View style={styles.inputContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.label}>Title:</Text>
              <TextInput
                style={styles.titleInput}
                value={label}
                onChangeText={setLabel}
                placeholderTextColor={Colors.primary200}
              />
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.label}>Description (optional):</Text>
              <TextInput
                style={styles.descInput}
                value={desc}
                onChangeText={setDesc}
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>
          
          {/* cancel/save buttons */}
          <View style={styles.navButtonGrid}>
            <NavButton onPress={cancelHandler}>Cancel</NavButton>
            <NavButton onPress={saveHandler}>Save</NavButton>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default EditList;

// stylesheet
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: Colors.primary500,
    borderRadius: 12,
    padding: 20,
  },
  inputContainer: {
    backgroundColor: Colors.primary600o8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 20,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: Colors.primary100,
    fontSize: 20,
    fontFamily: "playfair",
  },
  titleInput: {
    backgroundColor: Colors.primary400,
    width: 300,
    height: 50,
    borderRadius: 10,
    fontSize: 20,
    color: Colors.primary100,
  },
  descContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  descInput: {
    backgroundColor: Colors.primary400,
    width: 300,
    height: 100,
    borderRadius: 10,
    fontSize: 15,
    color: Colors.primary100,
  },

  navButtonGrid: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
});
