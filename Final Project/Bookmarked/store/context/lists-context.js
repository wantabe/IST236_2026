import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import dummy data
import { DUMMY_LISTS } from "../../data/dummy_data";

// create the context
export const ListsContext = createContext({
    // context attributes
    lists: [],
    addList: (label, desc) => {},
    updateList: (id, label, desc) => {},
    deleteList: (id) => {},
});

// -------------
// Lists Context
// -------------
function ListsContextProvider({ children }) {
    // handle state
    const [lists, setLists] = useState(DUMMY_LISTS);

    // load from storage
    useEffect(() => {
        async function loadLists() {
            // try/catch to ensure lists loaded from storage
            try {
                // get the lists from storage
                const stored = await AsyncStorage.getItem("lists");
                if (stored !== null) {
                    // set lists from storage if they could be retrieved
                    setLists(JSON.parse(stored));
                }
            } catch (e) {
                console.log("Failed to load lists: ", e);
            }
        }
        loadLists();
    }, []);

    // save to storage when lists change
    useEffect(() => {
        async function saveLists() {
            try {
                // send lists to storage
                await AsyncStorage.setItem("lists", JSON.stringify(lists));
            } catch (e) {
                console.log("Failed to save lists: ", e);
            }
        }
        saveLists();
    }, [lists]); // gets called when "lists" changes

    // function to update a list
    function updateList(id, label, desc) {
        setLists((current) =>
            current.map((list) =>
                list.id === id ? {...list, label, desc } : list
            )
        );
    }

    // function to add a list
    function addList(label, desc) {
        const newList = {
            id: Date.now().toString(),
            label: label,
            desc: desc,
        };
        setLists((current) => [...current, newList]);
    }

    // function to delete a list
    function deleteList(id) {
        setLists((current) => current.filter((list) => list.id !== id));
    }

    const value = { 
        lists: lists, 
        updateList: updateList, 
        addList: addList,
        deleteList: deleteList ,
    };
    
    // return context
    return <ListsContext.Provider value={value}>{children}</ListsContext.Provider>;
}

export default ListsContextProvider;