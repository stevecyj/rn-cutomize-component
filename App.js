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
import ProfileDetailScreen from "./src/screens/ProfileDetailScreen";

//redux
import configureStore from "./src/redux/store";
import { StoreContext } from "redux-react-hook";

const store = configureStore();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// 用 function 把 stack 單一的 主頁面 和 detail 頁面包起來，記得 return
function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#d291bc" },
        headerBackTitle: "返回",
        headerTintColor: "#fee2b3",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="HomeDetailScreen"
        component={HomeDetailScreen}
        option={{ title: "Detail" }}
      />
    </Stack.Navigator>
  );
}

//  profilescreen 也用 function 把 主頁 和 detail 包起來
function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: "#d291bc" },
        headerBackTitle: "返回-2",
        headerTintColor: "#ffd31d",
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="ProfileDetail"
        component={ProfileDetailScreen}
        option={{ title: "MyDetail-2" }}
      />
    </Stack.Navigator>
  );
}

function App() {
  const pressMe = () => {
    console.log("你按到我了！");
  };

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <MyButton custTitle={"按我吧！"} custOnPress={() => pressMe()} />
    // </View>

    /* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#d291bc" },
          headerBackTitle: "返回",
          headerTintColor: "#fee2b3",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="HomeDetailScreen"
          component={HomeDetailScreen}
          option={{ title: "Detail" }}
        />
      </Stack.Navigator> */

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName;
            if (route.name == "MyHomeStack") {
              iconName = focused ? "ios-aperture" : "ios-information-circle";
            } else if (route.name == "MyProfileStack") {
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
        <Tab.Screen name="MyHomeStack" component={MyHomeStack} />
        <Tab.Screen name="MyProfileStack" component={MyProfileStack} />
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

export default MyApp = () => (
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
