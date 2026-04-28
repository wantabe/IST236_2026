import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable } from "react-native";
import Colors from "../constants/colors";

// --------------------
// IconButton Component
// --------------------
function IconButton(props) {
    return (
        <Pressable onPress={props.onPress}>
            <AntDesign name={props.icon} size={25} color={props.color} />
        </Pressable>
    )
}

export default IconButton;