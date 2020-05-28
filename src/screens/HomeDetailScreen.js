import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "../components/Button/MyButton";

export default function HomeDetailScreen(props) {
  const pressMe = () => {
    console.log("你按到 HomeDetailScreen 了！");
  };

  const name = props.route.params.name || "nothing get";
  const passProps = props.route.params.passProps || "nothing get";
  return (
    <View style={styles.container}>
      <Text>我是 HomeDetailScreen 嘻嘻</Text>
      <Text>{passProps.note}</Text>
      {/* <Button title="回上一頁" onPress={() => props.navigation.pop()} />
      <Text>{name}</Text>
      <MyButton custTitle={"按我吧！"} custOnPress={() => pressMe()} />
      <Button
        title="change first page food"
        onPress={() => props.route.params.functionA("pineapple")}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8ccbbe",
    alignItems: "center",
    justifyContent: "center",
  },
});
