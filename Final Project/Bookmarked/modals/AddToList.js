import { Modal, StyleSheet, Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext, useState } from "react";

// import components
import NavButton from "../components/NavButton";
import SelectButton from "../components/SelectButton";
import Title from "../components/Title";

// import constants
import Colors from "../constants/colors";

// import contexts
import { ListsContext } from "../store/context/lists-context";
import { ListBooksContext } from "../store/context/list-books-context";

// import create list modal
import CreateList from "./CreateList";

// ---------------
// AddToList Modal
// ---------------
function AddToList({ visible, onClose, bookId }) {
    // set safe area screen boundaries
    const insets = useSafeAreaInsets();

    // contexts
    const listsCtx = useContext(ListsContext);
    const listBooksCtx = useContext(ListBooksContext);

    // handle selected list state
    const [selectedList, setSelectedList] = useState(null);

    // handle adding to list
    function addHandler() {
        if (!selectedList) return;
        listBooksCtx.addBookToList(selectedList, bookId);
        setSelectedList(null);
        onClose();
    }

    // handle cancel
    function cancelHandler() {
        setSelectedList(null);
        onClose();
    }

    // handle selected list
    function selectListHandler(id) {
        // if tapped list is selected, unselect it, otherwise select it
        setSelectedList((current) => (current === id ? null : id));
    }

    // handle modal
    const [modalIsVisible, setModalIsVisible] = useState(false);
    function createListHandler() {
        setModalIsVisible(true);
    }
    function closeCreateListHandler() {
        setModalIsVisible(false);
    }

    // -------
    // Display
    // -------
    return (
        <Modal visible={visible} animationType="slide">
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
                
                <Text style={styles.sectionLabel}>My Lists</Text>
                <ScrollView style={styles.listContaier}>
                    <View style={styles.navButtonGrid}>
                        {listsCtx.lists.map((list) => (
                            <SelectButton
                                key={list.id}
                                selected={selectedList === list.id}
                                onPress={() => selectListHandler(list.id)}
                            >
                                {list.label}
                            </SelectButton>
                        ))}
                        <NavButton onPress={createListHandler}>New List</NavButton>
                    </View>
                </ScrollView>

                {/* create list modal */}
                <CreateList
                    visible={modalIsVisible}
                    onClose={closeCreateListHandler}
                />
                {/* cancel/add buttons */}
                <View style={styles.navButtonGrid}>
                    <NavButton onPress={onClose}>Cancel</NavButton>
                    <NavButton onPress={addHandler}>Add</NavButton>
                </View>
            </View>
        </Modal>
    );
}

export default AddToList;

// stylesheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.primary500,
    },

    titleContainer: {

    },

    sectionLabel: {
        fontSize: 30,
        color: Colors.primary200,
        fontFamily: "playfair",
        marginHorizontal: 16,
        marginBottom: 10,
        textAlign: "center",
    },
    navButtonGrid: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        backgroundColor: Colors.primary600,
        borderRadius: 30,
        marginHorizontal: 20
    }
})