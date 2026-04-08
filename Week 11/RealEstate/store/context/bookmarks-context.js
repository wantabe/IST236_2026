import { createContext, useState } from "react";

export const BookmarksContext = createContext({
    ids: [],
    // can keep track of multiple states:
    //names: [],
    //bool: true,
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
    // and more funcs for the other states:
    //addName: (id) => {},
    //toggleBool: (id) => {},
    // and then ofc create the actual funcs below
})

function BookmarksContextProvider({children}) {
    const [bookmarkIds, setBookmarkIds] = useState([]);
    // just add more state vars for the other states:
    //const [names, setNames] = useState([]);
    //const [bool, setBool] = useState(true);

    function addFavorite(id) {
        setBookmarkIds((currentBookmarkIds) => {
            return [...currentBookmarkIds, id];
        });
    }

    function removeFavorite(id) {
        setBookmarkIds((currentBookmarkIds) => {
            return currentBookmarkIds.filter((bookId) => bookId != id);
        });
    }

    const value = {
        ids: bookmarkIds,
        // and here:
        //names: names,
        //bool: bool,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>
}

export default BookmarksContextProvider;