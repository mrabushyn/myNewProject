import React, { useState, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { styles } from "../style";

const initialState = {
  email: "",
  password: "",
};

export default LoginScreen = () => {
  const [state, setState] = useState(initialState);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryName, setSecureTextEntryName] = useState("Показати");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);

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
    Alert.alert("Credentials", `${state.email} + ${state.password}`);
    setState(initialState);
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

  return (
    <View style={styles.whiteBox}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <View
          style={{
            ...styles.form,
            marginBottom: isShowKeyboard ? 32 : 92,
            marginTop: isShowKeyboard ? 76 : 92,
          }}
        >
          <Text style={styles.title}>Увійти</Text>
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
                setState((prevState) => ({ ...prevState, password: value }))
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
                <Text style={styles.btnTitle}>Увійти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.logRegTogglePageBox, paddingBottom: 20 }}
                activeOpacity={0.7}
              >
                <Text style={styles.logRegTogglePageText}>
                  Немає акаунту? Зареєструватися
                </Text>
              </TouchableOpacity>
            </>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
