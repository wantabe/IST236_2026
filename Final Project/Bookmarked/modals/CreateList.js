import { Modal, StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState, useContext } from "react";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";

// import context
import { ListsContext } from "../store/context/lists-context";

// ----------------
// CreateList Modal
// ----------------
function CreateList(props) {
    // set safe area screen boundaries
    const insets = useSafeAreaInsets();
    // get context
    const listsCtx = useContext(ListsContext);
    // states
    const [label, setLabel] = useState("");
    const [desc, setDesc] = useState("");

    // handle adding a list
    function addHandler() {
        if (!label.trim()) return; // don't save an empty title
        listsCtx.addList(label, desc);
        setLabel(""); // reset inputs after saving
        setDesc("");
        props.onClose();
    }

    // handle cancel
    function cancelHandler() {
        // reset inputs
        setLabel("");
        setDesc("");
        props.onClose();
    }

    // -------
    // Display
    // -------
    return (
        <Modal visible={props.visible} animationType="slide">
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
                    <Title>Add to List</Title>
                </View>

                {/* inputs */}
                <View style={styles.inputContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.label}>List Title:</Text>
                        <TextInput 
                            style={styles.titleInput}
                            placeholder="Title..."
                            placeholderTextColor={Colors.primary200}
                            value={label}
                            onChangeText={setLabel}
                        />
                    </View>
                    <View style={styles.descContainer}>
                        <Text style={styles.label}>List Description (optional):</Text>
                        <TextInput 
                            style={styles.descInput}
                            placeholder="Description..."
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical="top"
                            placeholderTextColor={Colors.primary200}
                            value={desc}
                            onChangeText={setDesc}
                        />
                    </View>
                </View>
                
                {/* cancel/add buttons */}
                <View style={styles.navButtonGrid}>
                    <NavButton onPress={cancelHandler}>Cancel</NavButton>
                    <NavButton onPress={addHandler}>Add</NavButton>
                </View>
            </View>
        </Modal>
    );
}

export default CreateList;

// stylesheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.primary500,
    },

    inputContainer: {
        backgroundColor: Colors.primary600o8,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
        marginHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 10,
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
        width: 350,
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
        width: 350,
        height: 100,
        borderRadius: 10,
        fontSize: 15,
        color: Colors.primary100,
    },

    navButtonGrid: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        backgroundColor: Colors.primary600,
        borderRadius: 30,
        marginHorizontal: 20,
    }
})