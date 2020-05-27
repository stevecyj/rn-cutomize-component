import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "../components/Button/MyButton";

export default function ProfileScreen(props) {
  const pressMe = () => {
    console.log("你按到我了！");
  };

  return (
    <View style={styles.container}>
      <Text>我是 ProfileScreen</Text>
      <Button
        title="goto profile detail screen"
        onPress={() => props.navigation.push("ProfileDetail")}
      />
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
