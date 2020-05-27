import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import MyButton from "./src/components/Button/MyButton";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Tab = createBottomTabNavigator();
export default function App() {
  const pressMe = () => {
    console.log("你按到我了！");
  };

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <MyButton custTitle={"按我吧！"} custOnPress={() => pressMe()} />
    // </View>

    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarIcon: ({ color }) => (
            <Ionicons name={"ios-aperture"} size={25} color={color} />
          ),
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
