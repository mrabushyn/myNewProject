import React, { useContext } from "react";
import { View, TouchableOpacity, Text, Button, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { IsAuthContext } from "../../../App";

const Tabs = createBottomTabNavigator();
export default Home = () => {
  const { isAuth, setIsAuth } = useContext(IsAuthContext);
  return (
    <Tabs.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;

    //     if (route.name === "PostsScreen") {
    //       iconName = focused ? "grid-outline" : "grid-outline";
    //     }
    //     if (route.name === "CreatePostsScreen") {
    //       iconName = focused ? "add" : "add";
    //     }
    //     if (route.name === "ProfileScreen") {
    //       iconName = focused ? "person-outline" : "person-outline";
    //     }
    //     return <Ionicons name={iconName} size={size} color={color} />;
    //   },
    // })}
    // tabBarOptions={{
    //   activeTintColor: "#FF6C00",
    //   inactiveTintColor: "#212121",
    // }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerStyle: {
            backgroundColor: "#fff",
            height: 88,
            elevation: 1, // властивість для підняття елемента і створення тіні
            shadowColor: "#000", // колір тіні
            shadowOffset: { width: 0, height: 1 }, // зміщення тіні відносно елемента
            shadowOpacity: 0.2, // прозорість тіні
            shadowRadius: 2, // радіус тіні
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            textAlign: "center",
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setIsAuth(null)}
              activeOpacity={0.3}
              style={{ marginRight: 19 }}
            >
              <Image
                source={require("../../images/log-out.png")}
                style={{ width: 24, height: 24 }}
                tintColor="#bdbdbd"
              />
            </TouchableOpacity>
          ),
          // headerBackImage: () => (
          //   <Image
          //     source={require("../../images/log-out.png")}
          //     style={{ width: 20, height: 20 }}
          //   />
          // ),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerStyle: {
            backgroundColor: "#fff",
            height: 88,
            elevation: 1, // властивість для підняття елемента і створення тіні
            shadowColor: "#000", // колір тіні
            shadowOffset: { width: 0, height: 1 }, // зміщення тіні відносно елемента
            shadowOpacity: 0.2, // прозорість тіні
            shadowRadius: 2, // радіус тіні
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontFamily: "Roboto-Regular",
            fontSize: 17,
            textAlign: "center",
          },
          headerTitleAlign: "center",
          headerBackImage: () => (
            <Image
              source={require("../../images/log-out.png")}
              style={{ width: 20, height: 20 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>

    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <TouchableOpacity>
    //     <Text>Home</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

// import { AntDesign } from "@expo/vector-icons";
// <Ionicons name="exit-outline" size={24} color="black" />;
