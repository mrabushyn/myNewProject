import React, { useState } from "react";
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import { styles } from "./style";

export default App = () => {
  const [registerLoginToggle, setRegisterLoginToggle] = useState(true);

  const changePage = () => {
    if (registerLoginToggle) {
      setRegisterLoginToggle(false);
    } else setRegisterLoginToggle(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./screens/images/BG.jpg")}
        >
          {registerLoginToggle ? <RegistrationScreen /> : <LoginScreen />}

          <TouchableOpacity onPress={changePage} style={styles.navigate}>
            <Image
              style={{ ...styles.changeIconBtn, width: 50, height: 50 }}
              source={require("./screens/images/Nav.png")}
            />
          </TouchableOpacity>

          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
