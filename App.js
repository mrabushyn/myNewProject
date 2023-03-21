import React, { useCallback, useContext, createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import {
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
} from "react-native";

import RegistrationScreen from "./src/screens/auth/RegistrationScreen";
import LoginScreen from "./src/screens/auth/LoginScreen";
import Home from "./src/screens/Home/Home";

import { styles } from "./style";

SplashScreen.preventAutoHideAsync();

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export const IsAuthContext = createContext(null);

export default App = () => {
  const [isAuth, setIsAuth] = useState(null);
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

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
      <View onLayout={onLayoutRootView} style={styles.container}>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={require("./src/images/PhotoBG.jpg")}
        >
          <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
            <NavigationContainer>
              {!isAuth && (
                <AuthStack.Navigator>
                  <AuthStack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                  />
                  <AuthStack.Screen
                    name="Registration"
                    component={RegistrationScreen}
                    options={{ headerShown: false }}
                  />
                  <AuthStack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                  />
                </AuthStack.Navigator>
              )}
              {isAuth && (
                <MainStack.Navigator>
                  <MainStack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                  />
                </MainStack.Navigator>
              )}
            </NavigationContainer>
          </IsAuthContext.Provider>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

// import React, { useCallback } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
// import {
//   View,
//   TouchableWithoutFeedback,
//   ImageBackground,
//   Keyboard,
// } from "react-native";

// import RegistrationScreen from "./src/screens/auth/RegistrationScreen";
// import LoginScreen from "./src/screens/auth/LoginScreen";
// import Home from "./src/screens/Home/Home";

// import { styles } from "./style";

// SplashScreen.preventAutoHideAsync();

// const AuthStack = createStackNavigator();
// const MainStack = createStackNavigator();

// const useRoute = (isAuth) => {
//   if (!isAuth) {
//     return (
//       <AuthStack.Navigator>
//         <AuthStack.Screen
//           name="Login"
//           component={LoginScreen}
//           options={{ headerShown: false }}
//         />
//         <AuthStack.Screen
//           name="Registration"
//           component={RegistrationScreen}
//           options={{ headerShown: false }}
//         />
//       </AuthStack.Navigator>
//     );
//   }
//   return (
//     <MainStack.Navigator>
//       <MainStack.Screen
//         name="Home"
//         component={Home}
//         options={{ headerShown: false }}
//       />
//     </MainStack.Navigator>
//   );
// };

// export default App = () => {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   const routing = useRoute(null);

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View onLayout={onLayoutRootView} style={styles.container}>
//         <ImageBackground
//           style={styles.image}
//           resizeMode="cover"
//           source={require("./src/images/PhotoBG.jpg")}
//         >
//           <NavigationContainer>{routing}</NavigationContainer>
//           <StatusBar style="auto" />
//         </ImageBackground>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };
