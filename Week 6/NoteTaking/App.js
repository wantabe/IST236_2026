import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';

// import screens
import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';
import NotesScreen from './screens/NotesScreen';

// import constants
import Colors from './constants/colors';


export default function App() {
  // set up custom fonts
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf")
  })

  // handle current screen state
  const [currentScreen, setCurrentScreen] = useState("home");
  // handle current note id state
  const [currentID, setCurrentID] = useState(3);

  // array of current notes
  const [currentNotes, setCurrentNotes] = useState([
    {
      id: 1,
      title: "To Do List",
      text: "1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner",
    },
    {
      id: 2,
      title: "To Do List 2",
      text: "1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner",
    },
  ]);

  // ---------------
  // STATE FUNCTIONS
  // ---------------

  // screen change handlers
  function homeScreenHandler() {
    setCurrentScreen("home");
  }
  function notesScreenHandler() {
    setCurrentScreen("notes");
  }
  function addNoteScreenHandler() {
    setCurrentScreen("add");
  }

  // function to add notes
  function addNoteHandler(enteredNoteTitle, enteredNoteText) {
    // add new note with passed info
    setCurrentNotes((currentNotes) => {
      return [
        ...currentNotes, {id: currentID, title: enteredNoteTitle, text: enteredNoteText}
      ];
    });
    // increment note id
    setCurrentID(currentID + 1);
    // return to notes screen
    notesScreenHandler();
  }

  function deleteNoteHandler(id) {
    setCurrentNotes((currentNotes) => {
      return currentNotes.filter((item) => item.id !== id);
    });
  }

  // ------------
  // SCREEN LOGIC
  // ------------
  
  let screen = <HomeScreen onNext={notesScreenHandler} />;

  if (currentScreen === "add") {
    screen = <AddNoteScreen onAdd={addNoteHandler} onCancel={notesScreenHandler}/>;
  }

  if (currentScreen === "notes") {
    screen = <NotesScreen 
                onHome={addNoteScreenHandler} 
                onAdd={addNoteScreenHandler} 
                onDelete={deleteNoteHandler} 
                currentNotes={currentNotes} 
              />;
  }

  // -------
  // DISPLAY
  // -------

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
