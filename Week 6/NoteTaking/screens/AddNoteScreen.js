import { Image, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";
import { useState } from "react";

// ---------------
// Add Note Screen
// ---------------

function AddNoteScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  function addNoteHandler() {
    props.onAdd(noteTitle, noteText);
    props.onCancel();
  }

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
      <View style={styles.titleContainer}>
        <Title>Add New Note</Title>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.noteTitleContainer}>
            <TextInput 
                placeholder="Enter note title here" 
                style={styles.noteTitle}
                onChangeText={setNoteTitle}
            />
          </View>
          <View style={styles.noteTextContainer}>
            <TextInput 
                placeholder="Enter note text here" 
                style={styles.noteText}
                onChangeText={setNoteText}
                textAlignVertical="top"
                multiline={true}
                numberOfLines={20}
            />
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addNoteHandler}>Submit</NavButton>
            </View>
            <View style={styles.navButton}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddNoteScreen;

// style sheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginBottom: 50,
  },

  scrollContainer: {
    flex: 5,
  },

  noteTitleContainer: {
    borderWidth: 3,
    backgroundColor: Colors.primary300,
  },
  noteTitle: {
    color: Colors.accent800,
    fontWeight: "bold",
    fontSize: 30,
  },

  noteTextContainer: {
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.primary300,
    alignItems: "flex-start",
  },
  noteText: {
    color: Colors.primary800,
  },

  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginHorizontal: 10,
  },
});
