import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import MyButton from "../components/Button/MyButton";
import * as StorageHelper from "../helpers/StorageHelper";

export default function ProfileScreen(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    loadStorage();
    console.log("useEffect");
  }, []);

  const loadStorage = async () => {
    let nameGet = await StorageHelper.getMySetting("name");
    console.log("loadStorage");
    if (nameGet) {
      setName(nameGet);
    }
  };

  const changeName = async () => {
    try {
      await StorageHelper.setMySetting("name", name);
    } catch (err) {
      console.error(err);
      err;
    }
  };

  const pressMe = () => {
    console.log("你按到我了！");
  };

  return (
    <View style={styles.container}>
      <Text>我是 ==ProfileScreen== </Text>
      <TextInput
        maxLength={20}
        style={styles.TextInput}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text>Hello {name}!今天有吃早餐嗎!</Text>

      {/* <Button
        title="到我的下一頁"
        onPress={() => props.navigation.push("ProfileDetail")}
      /> */}

      <Button title="設定你的名字" onPress={() => changeName()} />
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
  TextInput: {
    height: 50,
    width: 300,
    borderWidth: 5,
    borderColor: "darkgray",
    fontSize: 28,
    textAlign: "center",
    color: "white",
    backgroundColor: "gray",
  },
});
