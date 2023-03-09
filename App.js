import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback, // імпорт компонента обгортки
  Keyboard, // імпорт компонента клавіатури
} from "react-native";
import { styles } from "./style";

export default App = () => {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Open up App.js </Text>
        <Text style={styles.title}>{value}</Text>
        <KeyboardAvoidingView
        // визначаємо ОС та налаштовуємо поведінку клавіатури // Для того щоб
        // вирішити проблему перекриття інпуту клавіатурою, ми скористаємося
        // компонентом  під назвою KeyboardAvoidingView та обгорнемо в нього наш
        // TextInput Цей компонент має проп під назвою behavior, у який потрібно
        // передати одне з двох  значень (padding для iOS або height для Android)
        // Для визначення ОС можна скористатися компонентом Platform, у якого є
        // ключ OS, де записаний  тип ОС пристрою, на якому відкрито програму
        // behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <TextInput
            style={styles.input}
            placeholder="Type text"
            value={value}
            onChangeText={inputHandler}
          ></TextInput>
        </KeyboardAvoidingView>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
};
