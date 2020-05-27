import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "../components/Button/MyButton";

export default function HomeScreen() {
  const pressMe = () => {
    console.log("你按到我了！");
  };

  return (
    <View style={styles.container}>
      <Text>我是 HomeScreen</Text>
      <MyButton custTitle={"按我吧！"} custOnPress={() => pressMe()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
