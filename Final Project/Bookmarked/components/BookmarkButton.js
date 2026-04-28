import { Ionicons } from '@expo/vector-icons';
import { Pressable } from "react-native";

// import constants
import Colors from "../constants/colors";

// ------------------------
// BookmarkButton Component
// ------------------------
function BookmarkButton(props) {
  if (props.pressed) {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="bookmark-outline" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}

export default BookmarkButton;
