import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback, // імпорт компонента обгортки
  Keyboard,
} from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
import { styles } from "./style";

export default App = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./screens/images/BG.jpg")}
        >
          <RegistrationScreen />
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
