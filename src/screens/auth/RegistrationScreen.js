import React, { useState, useRef, useContext } from "react";
import {
  // TouchableWithoutFeedback,
  // ImageBackground,
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

import { IsAuthContext } from "../../../App";
import { styles } from "./styleAuth";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export default RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryName, setSecureTextEntryName] = useState("Показати");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [imageLoader, setImageLoader] = useState(false);

  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);

  const { isAuth, setIsAuth } = useContext(IsAuthContext);

  const handleFocus = (ref) => {
    ref.current.setNativeProps({
      style: { ...styles.input, borderColor: "#FF6C00" },
    });
  };

  const handleBlur = (ref) => {
    ref.current.setNativeProps({
      style: styles.input,
    });
  };

  const onLogin = () => {
    Alert.alert(
      "Credentials",
      `${state.name} + ${state.email} + ${state.password}`
    );
    setState(initialState);
    setIsAuth({});
    // navigation.navigate("Home");
  };

  const passwordSecureBtn = () => {
    if (secureTextEntry === false) {
      setSecureTextEntry(true);
      setSecureTextEntryName("Показати");
    }
    if (secureTextEntry === true) {
      setSecureTextEntry(false);
      setSecureTextEntryName("Приховати");
    }
    return;
  };

  Keyboard.addListener("keyboardDidHide", () => {
    setIsShowKeyboard(false);
  });

  const handleImageUpload = () => {
    setImageLoader(true);
  };

  const handleImageDelete = () => {
    setImageLoader(false);
  };

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //   <ImageBackground
    //     style={styles.image}
    //     source={require("../../images/BG.jpg")}
    //   >
    <View style={styles.whiteBox}>
      {!imageLoader && (
        <>
          <View style={styles.photoBox}>
            <Image source={require("../../images/Empty.png")} />
          </View>
          <TouchableOpacity
            onPress={handleImageUpload}
            activeOpacity={0.3}
            style={styles.changePhotoBtn}
          >
            <Image
              style={{ ...styles.changeIconBtn, width: 25, height: 25 }}
              source={require("../../images/addPhoto.png")}
            />
          </TouchableOpacity>
        </>
      )}
      {imageLoader && (
        <>
          <View style={styles.photoBox}>
            <Image source={require("../../images/Rectangle_22.png")} />
          </View>
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={handleImageDelete}
            style={styles.changePhotoBtn}
          >
            <Image
              style={{
                ...styles.changeIconBtn,
                width: 25,
                height: 25,
              }}
              source={require("../../images/3.png")}
            />
          </TouchableOpacity>
        </>
      )}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <View
          style={{
            ...styles.form,
            marginBottom: isShowKeyboard ? 2 : 62,
            marginTop: isShowKeyboard ? 72 : 82,
          }}
        >
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
            value={state.name}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, name: value }))
            }
            onFocus={() => {
              setIsShowKeyboard(true);
              handleFocus(inputNameRef);
            }}
            onBlur={() => {
              handleBlur(inputNameRef);
            }}
            ref={inputNameRef}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            placeholderTextColor="#BDBDBD"
            value={state.email}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, email: value }))
            }
            onFocus={() => {
              setIsShowKeyboard(true);
              handleFocus(inputEmailRef);
            }}
            onBlur={() => {
              handleBlur(inputEmailRef);
            }}
            ref={inputEmailRef}
          ></TextInput>
          <View style={{ paddingBottom: 0 }}>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={secureTextEntry}
              value={state.password}
              onChangeText={(value) =>
                setState((prevState) => ({
                  ...prevState,
                  password: value,
                }))
              }
              onFocus={() => {
                setIsShowKeyboard(true);
                handleFocus(inputPassRef);
              }}
              onBlur={() => {
                handleBlur(inputPassRef);
              }}
              ref={inputPassRef}
            ></TextInput>
            <TouchableOpacity
              style={styles.secureBtn}
              activeOpacity={0.6}
              onPress={passwordSecureBtn}
            >
              <Text style={styles.secureBtnTitle}>{secureTextEntryName}</Text>
            </TouchableOpacity>
          </View>
          {!isShowKeyboard ? (
            <>
              <TouchableOpacity
                style={{ ...styles.button }}
                onPress={onLogin}
                activeOpacity={0.7}
              >
                <Text style={styles.btnTitle}>Зареєструватися</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logRegTogglePageBox}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.logRegTogglePageText}>
                  Вже є акаунт? Увійти
                </Text>
              </TouchableOpacity>
            </>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </View>
    //   </ImageBackground>
    // </TouchableWithoutFeedback>
  );
};
