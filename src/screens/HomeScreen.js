import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import MyButton from "../components/Button/MyButton";

var MOCKED_DATA = [
  {
    id: "1",
    note: "恭喜您！達成環島100次",
    date: "2020/05/20 14:00",
  },
  {
    id: "2",
    note: "您的會員身份認證已經審核通過！",
    date: "2020/05/21 16:00",
  },
  {
    id: "3",
    note: "撥款通知：本公司已將款項$12345撥入到您指定的銀行帳戶",
    date: "2020/05/22 09:00",
  },
  {
    id: "4",
    note: "恭喜您！達成環島100次",
    date: "2020/05/20 14:00",
  },
  {
    id: "5",
    note: "您的會員身份認證已經審核通過！",
    date: "2020/05/21 16:00",
  },
  {
    id: "6",
    note: "撥款通知：本公司已將款項$12345撥入到您指定的銀行帳戶",
    date: "2020/05/22 09:00",
  },
  {
    id: "7",
    note: "恭喜您！達成環島100次",
    date: "2020/05/20 14:00",
  },
  {
    id: "8",
    note: "您的會員身份認證已經審核通過！",
    date: "2020/05/21 16:00",
  },
  {
    id: "9",
    note: "撥款通知：本公司已將款項$12345撥入到您指定的銀行帳戶",
    date: "2020/05/22 09:00",
  },
  {
    id: "10",
    note: "恭喜您！達成環島100次",
    date: "2020/05/20 14:00",
  },
  {
    id: "11",
    note: "您的會員身份認證已經審核通過！",
    date: "2020/05/21 16:00",
  },
  {
    id: "12",
    note: "撥款通知：本公司已將款項$12345撥入到您指定的銀行帳戶",
    date: "2020/05/22 09:00",
  },
];

export default function HomeScreen(props) {
  const pressMe = () => {
    console.log("你按到我了！");
  };

  const [food, setFood] = useState("candy");
  const [dataSource, setDataSource] = useState([]);

  const changeFood = (foodGet) => {
    setFood(foodGet);
  };

  useEffect(() => {
    var book = MOCKED_DATA;
    setDataSource(book);
  });

  const showNoticeDetail = () => {
    props.navigation.push("HomeDetail", { passProps: cases });
  };

  const renderBook = (cases) => {
    return (
      <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
        <View style={styles.MainView}>
          <View>
            <View style={{ flex: 1 }}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={3}
                style={styles.MainText}
              >
                {cases.note}
              </Text>

              <Text
                ellipsizeMode="tail"
                numberOfLines={3}
                style={styles.DateText}
              >
                {cases.date}
              </Text>
            </View>
          </View>
          <View style={styles.separator}></View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {/* <Text>我是 HomeScreen</Text>
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
      <MyButton custTitle={"按我吧！"} custOnPress={() => pressMe()} /> */}
      <FlatList
        data={dataSource}
        renderItem={(cases) => renderBook(cases.item)}
        keyExtractor={(cases) => cases.id}
        style={{ backgroundColor: "#fce8d5" }}
      />
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
  MainView: {
    height: 80,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 8,
  },
  MainText: {
    color: "black",
    fontSize: 15,
    marginTop: 8,
  },
  DateText: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 13,
  },
  separator: {
    height: 1,
    backgroundColor: "#dddddd",
  },
});
