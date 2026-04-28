import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// create the context
export const ListBooksContext = createContext({
    // context attributes
    listBooks: {},
    addBookToList: (listId, bookId) => {},
    removeBookFromList: (listId, bookId) => {},
    getListBooks: (listId) => {},
});

// -----------------
// ListBooks Context
// -----------------
function ListBooksContextProvider({ children }) {
    // handle state
    const [listBooks, setListBooks] = useState({});

    // load from storage
    useEffect(() => {
        async function loadListBooks() {
            // try/catch to ensure list-book context loaded from storage
            try {
                // get the context from storage
                const stored = await AsyncStorage.getItem("listBooks");
                if (stored !== null) {
                    // set the context from storage if it could be retrieved
                    setListBooks(JSON.parse(stored));
                }
            } catch (e) {
                console.log("Failed to load list books: ", e);
            }
        }
        loadListBooks();
    }, []);

    // save to storage on change
    useEffect(() => {
        async function saveListBooks() {
            try {
                // send context to storage
                await AsyncStorage.setItem("listBooks", JSON.stringify(listBooks));
            } catch (e) {
                console.log("Failed to save list books: ", e);
            }
        }
        saveListBooks();
    }, [listBooks]); // gets called when "listBooks" changes

    // function to add a book to a list
    function addBookToList(listId, bookId) {
        setListBooks((current) => {
            const currentListBooks = current[listId] || [];
            // don't add if book already in list
            if (currentListBooks.includes(bookId)) return current;
            return { ...current, [listId]: [...currentListBooks, bookId] };
        });
    }

    // function to remove a book from a list
    function removeBookFromList(listId, bookId) {
        setListBooks((current) => ({
            ...current,
            [listId]: (current[listId] || []).filter((id) => id !== bookId),
        }));
    }

    // function to get books in a list
    function getListBooks(listId) {
        return listBooks[listId] || [];
    }

    const value = { 
        listBooks: listBooks, 
        addBookToList: addBookToList, 
        removeBookFromList: removeBookFromList, 
        getListBooks: getListBooks 
    };
    
    // return context
    return <ListBooksContext.Provider value={value}>{children}</ListBooksContext.Provider>;
}

export default ListBooksContextProvider;