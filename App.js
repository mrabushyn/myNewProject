// {
// <script src="http://192.168.1.109:19000"></script>;
// }

import React, { useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";

import RegistrationScreen from "./src/screens/auth/RegistrationScreen";
import LoginScreen from "./src/screens/auth/LoginScreen";
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
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container} onLayout={onLayoutRootView}>
          <ImageBackground
            style={styles.image}
            source={require("./src/images/BG.jpg")}
          >
            {registerLoginToggle ? <RegistrationScreen /> : <LoginScreen />}

            <TouchableOpacity onPress={changePage} style={styles.navigate}>
              <Image
                style={{ ...styles.changeIconBtn, width: 50, height: 50 }}
                source={require("./src/images/Nav.png")}
              />
            </TouchableOpacity>
            <StatusBar style="auto" />
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
};
