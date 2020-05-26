import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const MyButton = (props) => (
  <TouchableOpacity onPress={props.custOnPress}>
    <Text>{props.custTitle}</Text>
  </TouchableOpacity>
);

export default MyButton;

MyButton.propTypes = {
  custTitle: PropTypes.string.isRequired,
  custOnPress: PropTypes.func.isRequired,
};

MyButton.defaultProps = {
  custTitle: "Hello",
};
