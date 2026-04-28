import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import constants
import Colors from "../constants/colors";

// import components
import NavButton from "../components/NavButton";

// -----------------
// ISBNScanner Modal
// -----------------
function ISBNScanner({ visible, onClose, onScanned }) {
    // set safe area boundaries
    const insets = useSafeAreaInsets();
    // states
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);

    // request permission when modal opens
    useEffect(() => {
        if (visible && permission && !permission.granted) {
            requestPermission();
        }
    }, [visible, permission]);

    // handle bar code scanned
    function handleBarCodeScanned({ data }) {
        setScanned(true);
        onScanned(data); // pass the isbn back to discover screen
        onClose();
    }

    // reset scanned state
    function handleClose() {
        setScanned(false);
        onClose();
    }

    // avoid trying to render camera until permission is granted
    function renderContent() {
        // still loading permissions
        if (!permission) {
            return <Text style={styles.message}>Requesting camera permission...</Text>;
        }
        // permission denied
        if (!permission.granted) {
            return (
                <View style={styles.centeredContainer}>
                    <Text style={styles.message}>Camera access is required to scan ISBNs.</Text>
                    <NavButton onPress={requestPermission}>Grant Permission</NavButton>
                </View>
            );
        }
        // permission granted, show camera
        return (
            <CameraView
                style={styles.camera}
                facing="back"
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ["ean13", "ean8"],
                }}
            />
        );
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
                <Text style={styles.title}>Scan ISBN</Text>
                {renderContent()}

                <View style={styles.buttonContainer}>
                    <NavButton onPress={handleClose}>Cancel</NavButton>
                </View>
            </View>
        </Modal>
    );
}

export default ISBNScanner;

// stylesheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.primary500,
    },
    title: {
        fontSize: 28,
        color: Colors.primary100,
        fontFamily: "playfair",
        textAlign: "center",
        marginVertical: 16,
    },

    centeredContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 20,
    },
    message: {
        color: Colors.primary100,
        fontFamily: "playfair",
        fontSize: 16,
        textAlign: "center",
    },

    permissionContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
    permissionText: {
        color: Colors.primary100,
        fontFamily: "playfair",
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: 20,
    },
    camera: {
        flex: 1,
        marginHorizontal: 10,
        borderRadius: 12,
        overflow: "hidden",
    },
    buttonContainer: {
        alignItems: "center",
        marginVertical: 16,
    },
});