import React, { useContext } from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
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
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#212121",
        tabBarInactiveTintColor: "#212121",
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
          let currentRouteName = route.name;
          // console.log("focused", focused);

          if (route.name === "PostsScreen") {
            iconName = "grid-outline";
          }
          if (route.name === "CreatePostsScreen") {
            styleName = styles.centerBtn;
            iconName = focused ? "add" : "add";
          }
          if (route.name === "ProfileScreen") {
            // iconName = focused
            //   ? (styleName = styles.active)
            //   : (styleName = styles.inactive);

            iconName = focused ? "add" : "person-outline";
          }
          // console.log("navigate", iconName);
          console.log("currentRouteName", currentRouteName);
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
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;
          //   let styleName;
          //   console.log("PostsScreen", route);

          //   if (route.name === "PostsScreen") {
          //     iconName = focused
          //       ? route.name === "CreatePostsScreen"
          //       : route.name === "PostsScreen";
          //     iconName = focused ? "grid-outline" : "add";
          //   }
          //   if (route.name === "CreatePostsScreen") {
          //     styleName = styles.centerBtn;
          //     iconName = focused ? "add" : "person-outline";
          //   }
          //   if (route.name === "ProfileScreen") {
          //     // iconName = focused
          //     //   ? (styleName = styles.active)
          //     //   : (styleName = styles.inactive);
          //     iconName = focused ? "person-outline" : "add";
          //   }
          //   return (
          //     <Ionicons
          //       name={iconName}
          //       size={size}
          //       color={color}
          //       style={styleName}
          //     />
          //   );
          // },
        })}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ route }) => ({
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
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let styleName;
            // console.log("CreatePostsScreen", route.name);
            // console.log("iconName", iconName);

            // if (route.name === "PostsScreen") {
            //   iconName = focused ? "grid-outline" : "add";
            // }
            if (route.name === "CreatePostsScreen") {
              styleName = styles.centerBtn;
              iconName = "add";
              console.log("CreatePostsScreen", route.name);

              console.log("iconName", iconName);
            }
            if (route.name == "ProfileScreen") {
              iconName = "person-outline";
              console.log("!!!!!!!!iconName", iconName);
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
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          // tabBarIcon: ({ focused, size, color, opacity }) => (
          //   <Ionicons name="person-outline" size={size} color={color} />
          // ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>

    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <TouchableOpacity>
    //     <Text>Home</Text>
    //   </TouchableOpacity>
    // </View>
  );
};

const styles = StyleSheet.create({
  // tabBarStyle: {
  //   height: 83,
  //   paddingLeft: "12%",
  //   paddingRight: "12%",
  // },
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
