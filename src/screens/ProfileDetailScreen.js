import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "../components/Button/MyButton";

export default function ProfileDetailScreen(props) {
  const pressMe = () => {
    console.log("你按到 ProfileDetailScreen 了！");
  };

  return (
    <View style={styles.container}>
      <Text>我是 ProfileDetailScreen</Text>

      <MyButton custTitle={"按我吧！"} custOnPress={() => pressMe()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f3eb",
    alignItems: "center",
    justifyContent: "center",
  },
});
