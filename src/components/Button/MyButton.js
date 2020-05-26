import React from "react";
import { TouchableOpacity, Text } from "react-native";

function MyButton(props) {
  return (
    <TouchableOpacity onPress={props.custOnPress}>
      <Text>{props.custTitle}</Text>
    </TouchableOpacity>
  );
}

export default MyButton;
