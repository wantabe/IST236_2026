import { View, Text, StyleSheet, ScrollView, Switch, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";

function HomeScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  // -------
  // DISPLAY
  // -------
  return (
    <ImageBackground
      source={require("../assets/images/sky.jpg")}
      resize="cover"
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
        {/*Title*/}
        <View style={styles.titleContainer}>
          <Title>Boris' Bikes</Title>
        </View>

        {/*Content*/}
        <ScrollView style={styles.scrollContainer}>
          {/*Service Times Radio Buttons*/}
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Repair Time:</Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>

          {/*Service Options Checkboxes*/}
          <View style={styles.servicesContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxHeader}>Services:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetServices.bind(this, item.id)}
                      textStyle={{
                        textDecorationLine: "none",
                        color: Colors.primary800,
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary500,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.primary500}
                      style={{
                        padding: 2,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </View>

          {/*Switches*/}
          <View style={styles.rowContainer}>
            <View>
              <View style={styles.switchContainer}>
                <View style={styles.switchSubContainer}>
                  <Text style={styles.switchLabel}> Join Newsletter?</Text>
                  <Switch
                    onValueChange={props.onSetNewsletter}
                    value={props.newsletter}
                    thumbColor={
                      props.newsletter ? Colors.primary500 : Colors.primary800
                    }
                    trackColor={{
                      false: Colors.primary500,
                      true: Colors.primary800,
                    }}
                  />
                </View>
              </View>
              <View style={styles.switchContainer}>
                <View style={styles.switchSubContainer}>
                  <Text style={styles.switchLabel}>Rental Membership</Text>
                  <Switch
                    onValueChange={props.onSetRentalMembership}
                    value={props.rentalMembership}
                    thumbColor={
                      props.rentalMembership
                        ? Colors.primary500
                        : Colors.primary800
                    }
                    trackColor={{
                      false: Colors.primary500,
                      true: Colors.primary800,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>

          {/*Submit Order Button*/}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Order</NavButton>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

// stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },

  backgroundImage: {
    opacity: 0.3,
  },

  titleContainer: {
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  scrollContainer: {
    flex: 1,
    borderColor: Colors.primary500,
  },

  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 0,
    marginHorizontal: 20,
    borderColor: Colors.primary500,
    paddingVertical: 10,
  },
  radioHeader: {
    fontSize: 30,
    fontFamily: "jost",
    color: Colors.primary500,
  },
  radioGroup: {},
  radioGroupLabels: {
    fontSize: 15,
    fontFamily: "jost",
    color: Colors.primary800,
  },

  servicesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 0,
    marginHorizontal: 20,
    borderColor: Colors.primary500,
  },
  checkBoxContainer: {
    width: 230,
  },
  checkBoxHeader: {
    fontSize: 25,
    fontFamily: "jost",
    color: Colors.primary500,
    textAlign: "center",
  },
  checkBoxSubContainer: {
    padding: 2,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    borderWidth: 2,
    borderRadius: 0,
    marginHorizontal: 20,
    borderColor: Colors.primary500,
  },

  switchContainer: {
    justifyContent: "space-between",
  },
  switchSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchLabel: {
    color: Colors.primary800,
    fontFamily: "jost",
    fontSize: 20,
  },

  buttonContainer: {
    alignItems: "center",
  },
});
