import { StyleSheet, Text, View, Alert } from "react-native";
import { useContext, useLayoutEffect, useState } from "react";

// import components
import Title from "../components/Title";
import BookList from "../components/List/BookList";
import IconButton from "../components/IconButton";

// import book-list context
import { ListBooksContext } from "../store/context/list-books-context";

// import constants
import Colors from "../constants/colors";

// import modal
import EditList from "../modals/EditList";

// import context
import { ListsContext } from "../store/context/lists-context";

// import data
import { BOOKS } from "../data/dummy_data";

function ListDetailScreen(props) {
    // get list id
    const listId = props.route.params.listId;
    // get contexts
    const listsCtx = useContext(ListsContext);
    const listBooksCtx = useContext(ListBooksContext);
    // get the selected list
    const selectedList = listsCtx.lists.find((list) => list.id === listId);

    // handle saving edits
    function saveEditHandler(label, desc) {
        listsCtx.updateList(listId, label, desc);
    }

    // handle list deletion
    function deleteListHandler() {
        Alert.alert(
            "Delete List",
            `Are you sure you want to delete "${selectedList.label}"?`,
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        listsCtx.deleteList(listId);
                        props.navigation.goBack();
                    },
                },
            ]
        );
    }

    // filter data to respective list
    const displayedBooks = BOOKS.filter((book) =>
        listBooksCtx.getListBooks(listId).includes(book.id)
    );

    // handle modal
    const [modalIsVisible, setModalIsVisible] = useState(false);
    function editListHandler() {
        setModalIsVisible(true);
    }
    function closeEditListHandler() {
        setModalIsVisible(false);
    }

    // top bar buttons
    useLayoutEffect(() => {
        props.navigation.setOptions({
            title: "",
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.accent500,
            headerRight: () => {
                return (
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <IconButton
                            onPress={editListHandler}
                            icon="edit"
                            color={Colors.accent500}
                        />
                        <IconButton
                            icon="delete"
                            color="maroon"
                            onPress={deleteListHandler}
                        />
                    </View>                  
                )

            }
        });
    }, [props.navigation, editListHandler, deleteListHandler]);

    // -------
    // Display
    // -------
    return (
        <View style={styles.rootContainer}>
            {/* list info */}
            <View style={styles.titleContainer}>
                <Title>{selectedList.label}</Title>
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.desc}>{selectedList.desc}</Text>
            </View>
            {/* display list */}
            <View style={styles.listContainer}>
                <BookList items={displayedBooks} />
            </View>

            {/* edit list modal */}
            <EditList
                visible={modalIsVisible}
                onClose={closeEditListHandler}
                onSave={saveEditHandler}
                currentLabel={selectedList.label}
                currentDesc={selectedList.desc}
                listTitle={selectedList.label}
                listDesc={selectedList.desc}
            />
        </View>
    );
}

export default ListDetailScreen;

// stylesheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.primary500,
    },
    descContainer: {
        backgroundColor: Colors.primary600o8,
        marginHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    desc: {
        color: Colors.primary100,
        fontFamily: "playfair",
        fontSize: 20,
    },
    listContainer: {
        flex: 1,
        marginTop: 10,
    }
})