import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Button, // імпорт компонента клавіатури
  Alert,
  TouchableOpacity,
} from "react-native";
import { styles } from "../style";

export default RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (text) => setName(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${email} + ${password}`);
  };
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Реєстрація</Text>

      <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          placeholder="Логін"
          placeholderTextColor="#BDBDBD"
          value={name}
          onChangeText={nameHandler}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#BDBDBD"
          value={email}
          onChangeText={emailHandler}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          secureTextEntry={true}
          value={password}
          onChangeText={passwordHandler}
        ></TextInput>
        <TouchableOpacity
          title={"Зареєструватися"}
          style={styles.button}
          onPress={onLogin}
        />
      </KeyboardAvoidingView>
    </View>
  );
};
