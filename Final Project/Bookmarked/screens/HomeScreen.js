import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";

// temp dummy data for nav buttons
const DUMMY_LISTS = [
    { id: "1", label: "List 1" },
    { id: "2", label: "List 2" },
    { id: "3", label: "List 3" },
    { id: "4", label: "List 4" },
    { id: "5", label: "List 5" },
    { id: "6", label: "List 6" }
];

function HomeScreen() {
    const insets = useSafeAreaInsets();

    return (
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
            {/* title */}
            <Title>Bookmarked</Title>

            {/* currently reading card (placeholder) */}
            <View style={styles.currentlyReadingCard}>
                <Text style={styles.currentlyReadingLabel}>Currently Reading</Text>
                <Text style={styles.currentlyReadingTitle}>Book Title</Text>
                <Text style={styles.currentlyReadingAuthor}>Author Name</Text>
                <View style={styles.progressBarBackground}>
                    <Slider
                        style={styles.progressBarFill}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor="#ffffff"
                        maximumTrackTintColor="#000000"
                        thumbTintColor="blue"
                    />
                </View>
            </View>

            {/* reading stats (placeholder) */}
            <View style={styles.statsContainer}>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>0</Text>
                    <Text style={styles.statLabel}>Books Read</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>0</Text>
                    <Text style={styles.statLabel}>Lists Created</Text>
                </View>
                <View style={styles.statBox}>
                    <Text style={styles.statNumber}>0</Text>
                    <Text style={styles.statLabel}>Pages Read</Text>
                </View>
            </View>
            
            {/* my lists section */}
            <Text style={styles.sectionLabel}>My Lists</Text>
            <ScrollView>
                <View style={styles.navButtonGrid}>
                {DUMMY_LISTS.map((list) => (
                    <NavButton key={list.id}>{list.label}</NavButton>
                ))}
            </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

// stylesheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: "#16213e",
    },

    currentlyReadingCard: {
        margin: 16,
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#1a1a2e",
    },
    currentlyReadingLabel: {
        fontSize: 12,
        color: "#a0a0b0",
        marginBottom: 6,
    },
    currentlyReadingTitle: {
        fontSize: 18,
        color: "#ffffff",
        fontFamily: "playfair",
        marginBottom: 4,
    },
    currentlyReadingAuthor: {
        fontSize: 14,
        color: "#a0a0b0",
        marginBottom: 12,
    },

    progressBarBackground: {
        height: 6,
        borderRadius: 3,
        backgroundColor: "#2e2e4e",
    },
    progressBarFill: {
        width: 350, 
        eight: 6, 
        backgroundColor: "#4a90e2", 
        borderRadius: 3
    },

    statsContainer: {
        flexDirection: "row",
        marginHorizontal: 16,
        marginBottom: 16,
        gap: 8,
    },
    statBox: {
        flex: 1,
        padding: 12,
        borderRadius: 10,
        backgroundColor: "#1a1a2e",
        alignItems: "center",
    },
    statNumber: {
        fontSize: 22,
        color: "#ffffff",
        fontFamily: "playfair",
    },
    statLabel: {
        fontSize: 11,
        color: "#a0a0b0",
        textAlign: "center",
        marginTop: 4,
    },

    sectionLabel: {
        fontSize: 16,
        color: "#ffffff",
        fontFamily: "playfair",
        marginHorizontal: 16,
        marginBottom: 10,
    },
    navButtonGrid: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 16,
        gap: 8,
    },
});