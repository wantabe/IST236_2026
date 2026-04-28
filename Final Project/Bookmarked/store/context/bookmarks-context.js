import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// create the context
export const BookmarksContext = createContext({
    // context attributes
    ids: [],
    addBookmark: (id) => {},
    removeBookmark: (id) => {}
});

// -----------------
// Bookmarks Context
// -----------------
function BookmarksContextProvider({children}) {
    // handle state
    const [bookmarkIds, setBookmarkIds] = useState([]);

    // load from storage
    useEffect(() => {
        async function loadBookmarks() {
            // try/catch to ensure bookmarks load from storage
            try {
                // get bookmarks from storage
                const stored = await AsyncStorage.getItem("bookmarks");
                if (stored !== null) {
                    // set bookmarks from storage if they could be retrieved
                    setBookmarkIds(JSON.parse(stored));
                }
            } catch (e) {
                console.log("Failed to load bookmarks: ", e);
            }
        }
        loadBookmarks();
    }, []);

    // save to storage when bookmarks change
    useEffect(() => {
        async function saveBookmarks() {
            try {
                // send bookmarks to storage
                await AsyncStorage.setItem("bookmarks", JSON.stringify(bookmarkIds));
            } catch (e) {
                console.log("Failed to save bookmarks: ", e);
            }
        }
        saveBookmarks();
    }, [bookmarkIds]); // gets called when "bookmarkIds" changes

    // function to add a bookmark
    function addBookmark(id) {
        setBookmarkIds((currentBookmarkIds) => {
            return [...currentBookmarkIds, id];
        });
    }

    // function to remove a bookmark
    function removeBookmark(id) {
        setBookmarkIds((currentBookmarkIds) => {
            return currentBookmarkIds.filter((bookId) => bookId != id);
        });
    }

    const value = {
        ids: bookmarkIds,
        addBookmark: addBookmark,
        removeBookmark: removeBookmark,
    };

    // return context
    return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>
}

export default BookmarksContextProvider;