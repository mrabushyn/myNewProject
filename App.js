import React, { useState, useCallback } from "react";

import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import { styles } from "./style";

SplashScreen.preventAutoHideAsync();

export default App = () => {
  const [registerLoginToggle, setRegisterLoginToggle] = useState(true);

  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const changePage = () => {
    if (registerLoginToggle) {
      setRegisterLoginToggle(false);
    } else setRegisterLoginToggle(true);
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container} onLayout={onLayoutRootView}>
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
