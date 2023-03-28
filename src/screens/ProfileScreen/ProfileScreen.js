import React, { useState, useRef, useContext } from "react";
import {
  // TouchableWithoutFeedback,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Keyboard,
  Image,
  Platform,
} from "react-native";

import { styles } from "./ProfileStyle";

export default ProfileScreen = () => {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../../images/BG.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.whiteBox}></View>
      </View>
    </ImageBackground>
  );
};
