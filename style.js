import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // Використання модуля платформи
    ...Platform.select({
      ios: {
        backgroundColor: "#000000",
      },
      android: {
        backgroundColor: "#ffffff",
      },
    }),
  },
  title: {
    marginBottom: 33,
    // paddingVertical: 8,
    color: "#212121",
    // textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    lineHeight: 19,
  },
  button: {
    width: 250,
    height: 44,
    borderWidth: 1,
    backgroundColor: "#FF6C00",
    marginBottom: 10,
    marginTop: 16,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    // flex: 1,
    position: "absolute",
    width: "100%",
    height: 549,
    bottom: 0,
    // padding: 70,
    // paddingBottom: 190,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

// Використання платформо-залежних розширень файлів
// Коли ваш код для платформи складніший, ви повинні розглянути можливість поділу коду на окремі файли. React Native виявить, коли файл має .ios. або .android. розширення, і завантажить відповідний файл платформи, коли це буде потрібно.

// Наприклад, скажімо, у вас є наступні файли у вашому проекті:

// BigButton.ios.js
// BigButton.android.js

// Потім ви можете імпортувати компонент кнопки наступним чином:

// import BigButton from './BigButton';

// React Native автоматично підбере потрібний файл, залежно від діючої платформи.
