import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Pressable,
  Platform,
  Modal,
  Button,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPicker from "react-native-wheely";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";


function HomeScreen() {
    // setup insets
    const insets = useSafeAreaInsets();

    // -----------
    // State Logic
    // -----------

    // CHECKIN
    const [checkIn, setCheckIn] = useState(new Date());
    const [showCheckIn, setShowCheckIn] = useState(false);

    function showCheckInPicker() {
        setShowCheckIn(true);
    }
    function hideCheckInPicker() {
        setShowCheckIn(false);
    }
    function onChangeCheckIn(event, selectedDate) {
        const currentDate = selectedDate;
        if (Platform.OS === "android") {
            hideCheckInPicker(true);
        }
        setCheckIn(currentDate);
    }

    // CHECKOUT
    const [checkOut, setCheckOut] = useState(new Date());
    const [showCheckOut, setShowCheckOut] = useState(false);

    function showCheckOutPicker() {
        setShowCheckOut(true);
    }
    function hideCheckOutPicker() {
        setShowCheckOut(false);
    }
    function onChangeCheckOut(event, selectedDate) {
        const currentDate = selectedDate;
        if (Platform.OS === "android") {
            hideCheckOutPicker(true);
        }
        setCheckOut(currentDate);
    }

    // GUESTS
    const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const [numGuests, setNumGuests] = useState(0);
    const [showNumGuests, setShowNumGuests] = useState(false);

    function showNumGuestsPicker() {
        setShowNumGuests(true);
    }
    function hideNumGuestsPicker() {
        setShowNumGuests(false);
    }
    function onChangeNumGuests(index) {
        setNumGuests(index);
    }

    // CAMPSITES
    const campCounts = [1, 2, 3, 4, 5];
    const [numCamps, setNumCamps] = useState(0);
    const [showNumCamps, setShowNumCamps] = useState(false);

    function showNumCampsPicker() {
        setShowNumCamps(true);
    }
    function hideNumCampsPicker() {
        setShowNumCamps(false);
    }
    function onChangeNumCamps(index) {
        setNumCamps(index);
    }

    // RESULTS
    const [results, setResults] = useState("");

    function onReserveHandler() {
        let res = `Check In:\t\t${checkIn.toDateString()}\n`
        res += `Check Out:\t\t${checkOut.toDateString()}\n`
        res += `Number of Guests:\t\t${guestCounts[numGuests]}\n`
        res += `Number of Campsites:\t\t${campCounts[numCamps]}\n`
        setResults(res);
    }

    // WINDOW DIMENSIONS
    const {width, height} = useWindowDimensions();

    // DYNAMIC TEXT SIZING
    const dateLabelFlex = {
        fontSize: width * 0.07
    }
    const dateTextFlex = {
        fontSize: width * 0.05
    }

    // -------
    // Display
    // -------
    return (
        <ImageBackground
            source={require("../assets/images/mountains.png")}
            resizeMode="cover"
            style={styles.rootContainer}
            imageStyle={styles.backgroundImage}
        >
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
                <ScrollView style={styles.scrollContainer}>
                    {/* Title of Campground */}
                    <View style={styles.titleContainer}>
                        <Title>Corleone's Campground</Title>
                    </View>

                    {/* Check-in / Check Out */}
                    <View style={styles.rowContainer}>
                        {/* Check-in */}
                        <View style={styles.dateContainer}>
                            <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
                            <Pressable onPress={showCheckInPicker}>
                                <Text style={[styles.dateText, dateTextFlex]}>{checkIn.toDateString()}</Text>
                            </Pressable>
                        </View>

                        {/* Check Out */}
                        <View style={styles.dateContainer}>
                            <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
                            <Pressable onPress={showCheckOutPicker}>
                                <Text style={[styles.dateText, dateTextFlex]}>{checkOut.toDateString()}</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View>
                        {/* Check-In Picker */}
                        {showCheckIn && Platform.OS === "android" && (
                            <DateTimePicker
                                testId="dateTimePickerCheckInAndroid"
                                value={checkIn}
                                mode={"date"}
                                display="spiner"
                                onChange={onChangeCheckIn}
                            />
                        )}
                        {showCheckIn && Platform.OS === "ios" && (
                            <Modal
                                animationType="slide"
                                transparent={true}
                                supportedOrientations={["portrait", "landscape"]}
                            >
                                <View style={styles.centeredModalView}>
                                    <View style={styles.modalView}>
                                        <DateTimePicker
                                            testId="dateTimePickerCheckInIOS"
                                            value={checkIn}
                                            mode={"date"}
                                            display="spinner"
                                            onChange={onChangeCheckIn}
                                        />
                                        <Button title="Confirm" onPress={hideCheckInPicker} />
                                    </View>
                                </View>
                            </Modal>
                        )}

                        {/* Check Out Picker */}
                        {showCheckOut && Platform.OS === "android" && (
                            <DateTimePicker
                                testId="dateTimePickerCheckOutAndroid"
                                value={checkOut}
                                mode={"date"}
                                display="spiner"
                                onChange={onChangeCheckOut}
                            />
                        )}
                        {showCheckOut && Platform.OS === "ios" && (
                            <Modal
                                animationType="slide"
                                transparent={true}
                                supportedOrientations={["portrait", "landscape"]}
                            >
                                <View style={styles.centeredModalView}>
                                    <View style={styles.modalView}>
                                        <DateTimePicker
                                            testId="dateTimePickerCheckOutIOS"
                                            value={checkOut}
                                            mode={"date"}
                                            display="spinner"
                                            onChange={onChangeCheckOut}
                                        />
                                        <Button title="Confirm" onPress={hideCheckOutPicker} />
                                    </View>
                                </View>
                            </Modal>
                        )}
                    </View>

                    {/* Guests */}
                    <View style={styles.rowContainer}>
                        <Text style={[styles.dateLabel, dateLabelFlex]}>Number of Guests:</Text>
                        <Pressable onPress={showNumGuestsPicker}>
                            <View style={styles.dateContainer}>
                                <Text style={[styles.dateText, dateTextFlex]}>{guestCounts[numGuests]}</Text>
                            </View>
                        </Pressable>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={showNumGuests}
                            supportedOrientations={["portrait", "landscape"]}
                        >
                            <View style={styles.centeredModalView}>
                                <View style={styles.modalView}>
                                    <Text style={[styles.dateText, dateTextFlex]}>Enter Number of Guests:</Text>
                                    <WheelPicker
                                        selectedIndex={numGuests}
                                        options={guestCounts}
                                        onChange={onChangeNumGuests}
                                        containerStyle={{ width: 200 }}
                                    />
                                    <Button title="Confirm" onPress={hideNumGuestsPicker} />
                                </View>
                            </View>
                        </Modal>
                    </View>

                    {/* Campsites */}
                    <View style={styles.rowContainer}>
                        <Text style={[styles.dateLabel, dateLabelFlex]}>Number of Campsites:</Text>
                        <Pressable onPress={showNumCampsPicker}>
                            <View style={styles.dateContainer}>
                                <Text style={[styles.dateText, dateTextFlex]}>{campCounts[numCamps]}</Text>
                            </View>
                        </Pressable>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={showNumCamps}
                            supportedOrientations={["portrait", "landscape"]}
                        >
                            <View style={styles.centeredModalView}>
                                <View style={styles.modalView}>
                                    <Text style={[styles.dateText, dateTextFlex]}>Enter Number of Campsites:</Text>
                                    <WheelPicker
                                        selectedIndex={numCamps}
                                        options={campCounts}
                                        onChange={onChangeNumCamps}
                                        containerStyle={{ width: 200 }}
                                    />
                                    <Button title="Confirm" onPress={hideNumCampsPicker} />
                                </View>
                            </View>
                        </Modal>
                    </View>

                    <View style={styles.buttonContainer}>
                        <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
                    </View>

                    <View style={styles.resultsContainer}>
                        <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

export default HomeScreen;

// stylesheet
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    backgroundImage: {
        opacity: 0.3,
        resizeMode: "cover"
    },

    scrollContainer: {
        flex: 1,
        width: 3000,
        maxWidth: "95%",
    },

    titleContainer: {
        padding: 2,
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500,
        backgroundColor: Colors.accent500o5,
    },

    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 20,
        marginBottom: 20,
    },

    dateContainer: {
        backgroundColor: Colors.accent500o5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.primary500,
        backgroundColor: Colors.accent500o5,
        alignItems: "center",
        padding: 10,
    },
    dateLabel: {
        fontSize: 100,
        color: Colors.primary500,
        fontFamily: "mountain",
        textShadowColor: "black",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
    dateText: {
        color: Colors.primary800,
        fontSize: 20,
        fontWeight: "bold",
    },

    centeredModalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.primary300,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    buttonContainer: {
        alignItems: "center",
    },

    resultsContainer: {},
    results: {
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "mountain",
        textShadowColor: "black",
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
    },
})