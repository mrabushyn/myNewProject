import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import { styles } from "../style";

export default RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryName, setSecureTextEntryName] = useState("Показати");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [imageLoader, setImageLoader] = useState(false);

  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPassRef = useRef(null);

  const handleFocus = (ref) => {
    ref.current.setNativeProps({
      style: { ...styles.input, borderColor: "#FF6C00" },
    });
  };

  console.log(imageLoader);

  const handleBlur = (ref) => {
    ref.current.setNativeProps({
      style: styles.input,
    });
  };

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${email} + ${password}`);
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

  // useEffect(() => {}, []);

  return (
    <View style={styles.whiteBox}>
      {!imageLoader && (
        <>
          <View style={styles.photoBox}>
            <Image source={require("./images/Empty.png")} />
          </View>
          <TouchableOpacity
            onPress={handleImageUpload}
            activeOpacity={0.8}
            style={styles.changePhotoBtn}
          >
            <Image
              style={{ ...styles.changeIconBtn, width: 25, height: 25 }}
              source={require("../screens/images/addPhoto.png")}
            />
          </TouchableOpacity>
        </>
      )}
      {imageLoader && (
        <>
          <View style={styles.photoBox}>
            <Image source={require("./images/Rectangle_22.png")} />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleImageDelete}
            style={styles.changePhotoBtn}
          >
            <Image
              style={{
                ...styles.changeIconBtn,
                width: 25,
                height: 25,
              }}
              source={require("../screens/images/3.png")}
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
            marginBottom: isShowKeyboard ? 2 : 92,
            marginTop: isShowKeyboard ? 62 : 92,
          }}
        >
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            placeholder="Логін"
            placeholderTextColor="#BDBDBD"
            value={name}
            onChangeText={(text) => setName(text)}
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
            value={email}
            onChangeText={(text) => setEmail(text)}
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
              value={password}
              onChangeText={(text) => setPassword(text)}
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
            <TouchableOpacity
              style={styles.button}
              onPress={onLogin}
              activeOpacity={0.7}
            >
              <Text style={styles.btnTitle}>Зареєструватися</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
