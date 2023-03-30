import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import HomeScreen from "../Home/HomeScreen";
import { DATA } from "../../data";
import { styles } from "./postsStyle";

export default PostsScreen = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <FlatList
        style={{ width: "100%" }}
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={item.imageUrl} style={styles.postImage} />
            <View style={styles.postTitleContainer}>
              <Text style={styles.postTitle}>{item.title}</Text>
            </View>
            <View style={styles.postInfoContainer}>
              <View style={styles.postDataContainers}>
                <Image
                  source={require("../../images/Shape.png")}
                  style={styles.postIcon}
                />
                <Text
                  style={{
                    ...styles.postText,
                    color: "#BDBDBD",
                    textDecorationLine: "none",
                  }}
                >
                  {item.commentsCounter}
                </Text>
              </View>
              <View style={styles.postDataContainers}>
                <Image
                  source={require("../../images/map-pin.png")}
                  style={styles.postIcon}
                />
                <Text style={styles.postText}>{item.location}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
