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

export const ScrollPositionContext = createContext(0);

export default ProfileScreen = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    setScrollPosition(y);
  };
  console.log(scrollPosition);
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../images/BG.jpg")}
    >
      <ScrollPositionContext.Provider value={{ scrollPosition }}>
        <View style={styles.container}>
          <View style={styles.whiteBox}>
            <FlatList
              style={{ width: "100%", flex: 0.5 }}
              onScroll={handleScroll}
              scrollEventThrottle={16}
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
      </ScrollPositionContext.Provider>
    </ImageBackground>
  );
};
