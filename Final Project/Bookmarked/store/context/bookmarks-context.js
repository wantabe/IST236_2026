import { createContext, useState } from "react";

export const BookmarksContext = createContext({
    ids: [],
    addBookmark: (id) => {},
    removeBookmark: (id) => {}
});

function BookmarksContextProvider({children}) {
    const [bookmarkIds, setBookmarkIds] = useState([]);

    function addBookmark(id) {
        setBookmarkIds((currentBookmarkIds) => {
            return [...currentBookmarkIds, id];
        });
    }

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

    return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>
}

export default BookmarksContextProvider;