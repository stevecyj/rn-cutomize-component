import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MyButton = (props) => (
  <TouchableOpacity onPress={props.custOnPress}>
    <Text>{props.custTitle}</Text>
  </TouchableOpacity>
);

export default MyButton;
