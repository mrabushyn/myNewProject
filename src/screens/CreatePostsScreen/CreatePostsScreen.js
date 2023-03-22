import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./CreatePostsStyle";

export default CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <Image
          source={require("../../images/Content_Block.png")}
          style={styles.postImage}
        />
        <TouchableOpacity style={styles.loadImgBtnContainer}>
          <Image
            source={require("../../images/Group_1.png")}
            style={styles.loadImgBtn}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.postTitle}> Завантажити фото </Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
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
          <TextInput
            style={styles.input}
            placeholder="Пароль"
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
        <View style={styles.buttonContainer}></View>
      </View>
    </View>
  );
};
