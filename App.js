import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TextInput } from "react-native";
import { styles } from "./style";

export default App = () => {
const [value, setValue] = useState('')
const inputHandler = (text) => setValue(text)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.title}>{value}</Text>
      <TextInput 
      autoFocus
      style={styles.input}
      placeholder="Type text"
      value={value}
      onChangeText={inputHandler}
      >
      </TextInput>
      <StatusBar style="auto" />
    </View>
  );
};
