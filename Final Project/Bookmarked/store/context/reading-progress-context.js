import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// create the context
export const ReadingProgressContext = createContext({
    // context attributes
    progress: {},
    updateProgress: (bookId, currentPage) => {},
    getProgress: (bookId) => {},
});

// -----------------------
// ReadingProgress Context
// -----------------------
function ReadingProgressContextProvider({ children }) {
    // handle state
    const [progress, setProgress] = useState({});

    // load from storage
    useEffect(() => {
        async function loadProgress() {
            // try/catch to ensure lists loaded from storage
            try {
                // get the context from storage
                const stored = await AsyncStorage.getItem("readingProgress");
                if (stored !== null) {
                    // set context from storage if it could be retrieved
                    setProgress(JSON.parse(stored));
                }
            } catch (e) {
                console.log("Failed to load reading progress: ", e);
            }
        }
        loadProgress();
    }, []);

    // save to storage on change
    useEffect(() => {
        async function saveProgress() {
            try {
                // send context to storage
                await AsyncStorage.setItem("readingProgress", JSON.stringify(progress));
            } catch (e) {
                console.log("Failed to save reading progress: ", e);
            }
        }
        saveProgress();
    }, [progress]); // gets called when "progress" changes

    // function to update reading progress
    function updateProgress(bookId, currentPage) {
        setProgress((current) => ({
            ...current,
            [bookId]: {
                currentPage: currentPage,
                lastUpdated: Date.now(),
            },
        }));
    }

    // function to get reading progress
    function getProgress(bookId) {
        return progress[bookId] || { currentPage: 0, lastUpdated: null };
    }

    const value = {
        progress: progress,
        updateProgress: updateProgress,
        getProgress: getProgress,
    }

    // return context
    return <ReadingProgressContext.Provider value={value}>{children}</ReadingProgressContext.Provider>;
}

export default ReadingProgressContextProvider;