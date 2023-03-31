import React, { useState, useRef, useContext, createContext } from "react";
import {
  // TouchableWithoutFeedback,
  ImageBackground,
  ScrollView,
  Text,
  View,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Keyboard,
  Image,
  Platform,
} from "react-native";

import { DATA } from "../../data";
import { styles } from "./ProfileStyle";
import { IsScrollPositionContext } from "../Home/Home";

export default ProfileScreen = () => {
  const { scrollPosition, setScrollPosition } = useContext(
    IsScrollPositionContext
  );
  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    setScrollPosition(y);
  };
  // console.log(scrollPosition);
  return (
    // <ScrollView style={{ flex: 1 }}>
    <ImageBackground
      style={styles.image}
      source={require("../../images/BG.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.whiteBox}>
          <FlatList
            style={{ width: "100%", flex: 0.5 }}
            onScroll={handleScroll}
            scrollEventThrottle={1}
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
      </View>
    </ImageBackground>
    // </ScrollView>
  );
};
