import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import MyButton from "./src/components/Button/MyButton";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeDetailScreen from "./src/screens/HomeDetailScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="HomeDetailScreen"
          component={HomeDetailScreen}
          option={{ title: "Detail" }}
        />
      </Stack.Navigator>
      {/* <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName;
            if (route.name == "Home") {
              iconName = focused ? "ios-aperture" : "ios-information-circle";
            } else if (route.name == "Profile") {
              iconName = focused ? "ios-rocket" : "ios-baseball";
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator> */}
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
