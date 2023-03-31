import React, { useState, useContext, createContext, useEffect } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { IsAuthContext } from "../../../App";

const Tabs = createBottomTabNavigator();
export const IsScrollPositionContext = createContext(0);

export default Home = ({ navigation }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { isAuth, setIsAuth } = useContext(IsAuthContext);

  return (
    <IsScrollPositionContext.Provider
      value={{ scrollPosition, setScrollPosition }}
    >
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#212121",
          tabBarInactiveTintColor: "#212121",
          // tabBarActiveBackgroundColor: "#fff",
          // tabBarInactiveBackgroundColor: "#ff0",
          tabBarPressOpacity: 0.2,
          tabBarScrollEnabled: true,
          tabBarStyle: {
            height: 83,
            paddingLeft: "12%",
            paddingRight: "12%",
            // display: "flex",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let styleName;

            if (route.name === "PostsScreen") {
              iconName = focused ? "grid-outline" : "grid-outline";
              // console.log(route);
            }
            if (route.name === "CreatePostsScreen") {
              iconName = focused ? "person-outline" : "add";
              styleName = styles.centerBtn;
            }
            if (route.name === "ProfileScreen") {
              iconName = focused ? "add" : "person-outline";
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
                style={styleName}
              />
            );
          },
        })}
      >
        <Tabs.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={({ route }) => ({
            scrollEnabled: true,
            title: "Публікації",
            headerStyle: {
              backgroundColor: "#fff",
              height: 88,
              elevation: 1,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 2,
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
          })}
        />
        <Tabs.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={({ route }) => ({
            tabBarStyle: {
              display: "none",
            },
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
            headerLeft: () => (
              <TouchableOpacity>
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="#212121"
                  style={{ marginLeft: 20 }}
                  onPress={() => navigation.goBack()}
                />
              </TouchableOpacity>
            ),
          })}
        />

        <Tabs.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            // tabBarIcon: ({ focused, size, color, opacity }) => (
            //   <Ionicons name="person-outline" size={size} color={color} />
            // ),
            headerShown: false,
            tabBarStyle: { transform: [{ translateY: -scrollPosition }] },
          }}
        ></Tabs.Screen>
      </Tabs.Navigator>
    </IsScrollPositionContext.Provider>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  centerBtn: {
    backgroundColor: "#FF6C00",
    borderWidth: 0,
    color: "white",
    width: 70,
    height: 40,
    borderRadius: 50,
    justifyContent: "space-between",
    paddingLeft: 23,
    paddingTop: 5,
    // marginLeft: "200%",
  },
  inactive: {
    backgroundColor: "#fff",
    borderWidth: 0,
    color: "#212121",
  },
});
