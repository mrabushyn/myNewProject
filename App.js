import React, { useState } from "react";
import * as Font from "expo-font";
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import { styles } from "./style";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });
};

export default App = () => {
  const [registerLoginToggle, setRegisterLoginToggle] = useState(true);
  const [isReady, setIsReady] = useState(false);

  const changePage = () => {
    if (registerLoginToggle) {
      setRegisterLoginToggle(false);
    } else setRegisterLoginToggle(true);
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        // onError={console.warn("Fonts Error")}
      />
    );
  }

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
