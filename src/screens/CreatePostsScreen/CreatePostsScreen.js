import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./CreatePostsStyle";

export default CreatePostsScreen = () => {
  const [publish, setPublish] = useState(true);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <View style={styles.container}>
        {publish ? (
          <>
            <View style={styles.postContainer}>
              <Image
                source={require("../../images/Content_Block.png")}
                style={styles.postImage}
              />
              <TouchableOpacity
                style={styles.loadImgBtnContainer}
                onPress={() => setPublish(false)}
              >
                <Image
                  source={require("../../images/Group_1.png")}
                  style={styles.loadImgBtn}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.postTitle}> Завантажити фото </Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../../images/map-pin.png")}
                  style={styles.locationIcon}
                />
                <TextInput
                  style={{ ...styles.input, paddingLeft: 0 }}
                  placeholder="Назва..."
                  placeholderTextColor="#BDBDBD"
                  // placeholderFontSize="50"
                  // value={state.password}
                  // onChangeText={(value) =>
                  //   setState((prevState) => ({
                  //     ...prevState,
                  //     password: value,
                  //   }))
                  // }
                  // onFocus={() => {
                  //   setIsShowKeyboard(true);
                  //   handleFocus(inputPassRef);
                  // }}
                  // onBlur={() => {
                  //   handleBlur(inputPassRef);
                  // }}
                  // ref={inputPassRef}
                ></TextInput>
                <TextInput
                  style={styles.input}
                  placeholder="Місцевість"
                  placeholderTextColor="#BDBDBD"
                  // value={state.password}
                  // onChangeText={(value) =>
                  //   setState((prevState) => ({
                  //     ...prevState,
                  //     password: value,
                  //   }))
                  // }
                  // onFocus={() => {
                  //   setIsShowKeyboard(true);
                  //   handleFocus(inputPassRef);
                  // }}
                  // onBlur={() => {
                  //   handleBlur(inputPassRef);
                  // }}
                  // ref={inputPassRef}
                ></TextInput>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{ ...styles.button }}
                  onPress={() => setPublish(false)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.btnTitle}>Опублікувати</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.postContainer}>
              <Image
                source={require("../../images/Rectangle_23.png")}
                style={styles.postImage}
              />
              <TouchableOpacity
                style={styles.loadImgBtnContainer}
                onPress={() => setPublish(true)}
              >
                <Image
                  source={require("../../images/Group_1.png")}
                  style={{ ...styles.loadImgBtn, opacity: 0.3 }}
                />
                <Image
                  source={require("../../images/Photograph.png")}
                  style={{
                    ...styles.loadImgBtn,
                    position: "absolute",
                    top: "50%",
                    marginTop: -9,
                    left: "50%",
                    marginLeft: -10,
                    opacity: 0.9,
                    width: 20,
                    height: 18,
                    zIndex: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.postTitle}> Редагувати фото </Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../../images/map-pin.png")}
                  style={styles.locationIcon}
                />
                <TextInput
                  style={{ ...styles.input, paddingLeft: 0 }}
                  placeholder="Назва..."
                  placeholderTextColor="#BDBDBD"
                  value={"Ліс"}
                  // onChangeText={(value) =>
                  //   setState((prevState) => ({
                  //     ...prevState,
                  //     password: value,
                  //   }))
                  // }
                  // onFocus={() => {
                  //   setIsShowKeyboard(true);
                  //   handleFocus(inputPassRef);
                  // }}
                  // onBlur={() => {
                  //   handleBlur(inputPassRef);
                  // }}
                  // ref={inputPassRef}
                ></TextInput>
                <TextInput
                  style={styles.input}
                  placeholder="Місцевість"
                  placeholderTextColor="#BDBDBD"
                  value={"Ivano-Frankivs'k Region, Ukraine"}
                  // onChangeText={(value) =>
                  //   setState((prevState) => ({
                  //     ...prevState,
                  //     password: value,
                  //   }))
                  // }
                  // onFocus={() => {
                  //   setIsShowKeyboard(true);
                  //   handleFocus(inputPassRef);
                  // }}
                  // onBlur={() => {
                  //   handleBlur(inputPassRef);
                  // }}
                  // ref={inputPassRef}
                ></TextInput>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={{
                    ...styles.button,
                    backgroundColor: "#FF6C00",
                  }}
                  onPress={() => setPublish(true)}
                  activeOpacity={0.7}
                >
                  <Text style={{ ...styles.btnTitle, color: "#fff" }}>
                    Опублікувати
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
        <View style={styles.centerButtonContainer}>
          <TouchableOpacity style={styles.centerBtn} activeOpacity={0.7}>
            <Ionicons name="trash-outline" size={24} color="#DADADA" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
