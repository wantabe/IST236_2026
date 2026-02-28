import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

// import components
import Title from "../components/Title";
import NavButton from "../components/NavButton";

// import constants
import Colors from "../constants/colors";

function OrderReviewScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[Colors.primary100, Colors.accent300, Colors.accent500]}
      style={styles.rootContainer}
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
          <Title>Order Summary</Title>
        </View>

        {/*Subtitle*/}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Your order has been placed!</Text>
          <Text style={styles.subTitle}>Order details below:</Text>
        </View>

        {/*Repair Time*/}
        <View style={styles.orderContainer}>
          {/*Repair Time*/}
          <Text style={styles.order}>Repair Time:</Text>
          <Text style={styles.subOrder}>{props.repairTime}</Text>

          {/*Selected Services*/}
          <Text style={styles.order}>Services:</Text>
          {props.services.map((item) => {
            if (item.value) {
              return (
                <Text key={item.id} style={styles.subOrder}>
                  {item.name}
                </Text>
              );
            }
          })}

          {/*Newsletter/Rental Membership*/}
          <Text style={styles.order}>Memberships:</Text>
          <Text style={styles.subOrder}>
            {props.newsletter ? "Newsletter" : ""}
          </Text>
          <Text style={styles.subOrder}>
            {props.rentalMembership ? "Rental Membership" : ""}
          </Text>
        </View>

        {/*Totals*/}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Subtotal: ${props.price.toFixed(2)}
          </Text>
          <Text style={styles.subTitle}>
            Sales Tax: ${(props.price * 0.06).toFixed(2)}{" "}
          </Text>
          <Text style={styles.subTitle}>
            Total: ${(props.price + props.price * 0.06).toFixed(2)}
          </Text>
        </View>

        {/*Return Home*/}
        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Return Home</NavButton>
        </View>
      </View>
      </LinearGradient>
  );
}

export default OrderReviewScreen;

// stylesheet
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%"
  },

  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
  },

  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 3,
    borderColor: Colors.primary500,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: "jost",
    textAlign: "center",
    color: Colors.primary500,
  },

  orderContainer: {
    flex: 3,
    borderWidth: 3,
    marginHorizontal: 20,
    borderColor: Colors.primary500,
  },
  order: {
    fontSize: 20,
    fontFamily: "jost",
    color: Colors.primary500,
    paddingTop: 10,
    textAlign: "center",
  },
  subOrder: {
    textAlign: "center",
    fontFamily: "jost",
    fontSize: 18,
    color: Colors.primary800,
  },

  buttonContainer: {
    alignItems: "center",
  },
});
