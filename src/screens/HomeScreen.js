import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MyButton from "../components/Button/MyButton";

export default function HomeScreen(props) {
  const pressMe = () => {
    console.log("你按到我了！");
  };

  const [food, setFood] = useState("candy");

  const changeFood = (foodGet) => {
    setFood(foodGet);
  };
  return (
    <View style={styles.container}>
      <Text>我是 HomeScreen</Text>
      <Text>{food}</Text>
      <Button
        title="到下一頁"
        onPress={() =>
          props.navigation.push("HomeDetailScreen", {
            name: "jojo",
            functionA: (arg) => changeFood(arg),
          })
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
