import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CreatePostsScreen from "../CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const Tabs = createBottomTabNavigator();

export default Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PostsScreen") {
            iconName = focused ? "grid-outline" : "grid-outline";
          }
          if (route.name === "CreatePostsScreen") {
            iconName = focused ? "add" : "add";
          }
          if (route.name === "ProfileScreen") {
            iconName = focused ? "person-outline" : "person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FF6C00",
        inactiveTintColor: "#212121",
      }}
    >
      <Tabs.Screen name="PostsScreen" component={PostsScreen} />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
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
