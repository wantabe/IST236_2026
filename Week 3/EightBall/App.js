import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Button,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  // Create state management variables
  const [userQuestion, setUserQuestion] = useState("");
  const [eightBallResponse, setEightBallResponse] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState("false");

  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  function startEightBallHandler() {
    if (userQuestion !== "") {
      setModalIsVisible(true);
      getEightBallResponse();
    }
  }

  function endEightBallHandler() {
    setModalIsVisible(false);
    setUserQuestion("");
    setEightBallResponse("");
  }

  function getEightBallResponse() {
    // Generate random index to pull from responses array
    const randResponse = Math.floor(Math.random() * 20);
    setEightBallResponse(responses[randResponse]);
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Magic Eight Ball</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            Enter Question for the Eight Ball:
          </Text>
          <TextInput
            style={styles.textInput}
            // Placeholder for when it's empty
            placeholder="Enter your question here"
            // When text is changed, update userQuestion
            onChangeText={setUserQuestion}
            // Tie the entered value to the userQuestion
            value={userQuestion}
          />
        </View>

        <View style={styles.askButtonContainer}>
          <Pressable
            // Add Android ripple
            android_ripple={{ color: "#9ab1c2" }}
            // Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // Open modal screen when pressed
            onPress={startEightBallHandler}
          >
            <View style={styles.askButton}>
              <Text style={styles.askButtonText}>Ask the Eight Ball</Text>
            </View>
          </Pressable>
        </View>

        <Modal visible={modalIsVisible}>
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.outputLabel}>You asked the Eight Ball:</Text>
            <Text style={styles.outputText}>{userQuestion}</Text>

            <Text style={styles.outputLabel}>The Eight Ball answers:</Text>
            <Text style={styles.outputText}>{eightBallResponse}</Text>

            <View style={styles.modalButtonContainer}>
              <View style={styles.modalButton}>
                <Button
                  title="Return"
                  color="black"
                  onPress={endEightBallHandler}
                />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e61a0",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
  },

  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  titleBackground: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  inputContainer: {
    flex: 1,
    justifyContent: "center",
  },
  inputLabel: {
    fontSize: 25,
    color: "white",
  },
  textInput: {
    backgroundColor: "#88abb0",
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },

  askButtonContainer: {
    flex: 2,
    justifyContent: "top",
  },
  pressedButton: {
    opacity: 0.7,
  },
  askButton: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  askButtonText: {
    fontSize: 25,
  },

  modalRoot: {
    flex: 1,
    backgroundColor: "#1e61a0",
    alignItems: "center",
  },
  outputLabel: {
    fontSize: 25,
    color: "white",
    marginTop: 20,
  },
  outputText: {
    fontSize: 20,
    color: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 6,
    width: "90%",
    height: "10%",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 10,
    marginTop: 10,
  },
  modalButtonContainer: {
    marginTop: 50,
  },
  modalButton: {
    width: 200,
  },
});
