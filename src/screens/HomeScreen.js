import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "../components/Button/MyButton";

export default function HomeScreen(props) {
  const pressMe = () => {
    console.log("你按到我了！");
  };

  return (
    <View style={styles.container}>
      <Text>我是 HomeScreen</Text>
      <Button
        title="到下一頁"
        onPress={() =>
          props.navigation.push("HomeDetailScreen", { name: "jojo" })
        }
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
