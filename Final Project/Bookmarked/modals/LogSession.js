import { Modal, View, Text, TextInput, StyleSheet } from "react-native";
import { useState, useContext, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import context
import { ReadingProgressContext } from "../store/context/reading-progress-context";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";

// ----------------
// LogSession Modal
// ----------------
function LogSession({ visible, onClose, bookId, pageCount }) {
    // set safe area screen boundaries
    const insets = useSafeAreaInsets();

    // context
    const progressCtx = useContext(ReadingProgressContext);

    // get current progress
    const currentProgress = progressCtx.getProgress(bookId);

    // handle page input state
    const [pageInput, setPageInput] = useState("");

    // load/reload current page when modal opens/closes
    useEffect(() => {
        if (visible) {
            setPageInput(
                currentProgress.currentPage > 0
                    ? String(currentProgress.currentPage)
                    : ""
            );
        }
    }, [visible]);

    // save handler function
    function saveHandler() {
        const page = parseInt(pageInput); // convert input to int
        if (isNaN(page) || page < 0) return; // ensure input is numeric and non-negative
        // cap at page count so it can't exceed book length
        const capped = Math.min(page, pageCount);
        // update progress in context
        progressCtx.updateProgress(bookId, capped);
        onClose();
    }

    // cancel handler function
    function cancelHandler() {
        // reset input back to saved progress on cancel
        setPageInput(
            currentProgress.currentPage > 0
                ? String(currentProgress.currentPage)
                : ""
        );
        onClose();
    }

    // -------
    // Display
    // -------
    return (
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Title>Log Session</Title>

                    <Text style={styles.label}>Current Page</Text>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            value={pageInput}
                            onChangeText={setPageInput}
                            keyboardType="numeric"
                            placeholder="0"
                            placeholderTextColor={Colors.primary200}
                        />
                        <Text style={styles.pageCount}>of {pageCount}</Text>
                    </View>

                    {/* cancel/save buttons */}
                    <View style={styles.buttonRow}>
                        <View style={{ flex: 1 }}>
                            <NavButton onPress={cancelHandler}>Cancel</NavButton>
                        </View>
                        <View style={{ flex: 1 }}>
                            <NavButton onPress={saveHandler}>Save</NavButton>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default LogSession;

// stylesheet
const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "85%",
        backgroundColor: Colors.primary500,
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        gap: 12,
    },
    label: {
        color: Colors.primary100,
        fontFamily: "playfair",
        fontSize: 18,
    },

    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    input: {
        backgroundColor: Colors.primary400,
        width: 100,
        height: 50,
        borderRadius: 10,
        fontSize: 20,
        fontFamily: "playfair",
        color: Colors.primary100,
        textAlign: "center",
    },
    pageCount: {
        color: Colors.primary200,
        fontFamily: "playfair",
        fontSize: 18,
    },
    buttonRow: {
        flexDirection: "row",
        width: "100%",
        gap: 8,
    },
});