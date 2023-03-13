import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Використання модуля платформи
    // ...Platform.select({
    //   ios: {
    //     backgroundColor: "#000000",
    //   },
    //   android: {
    //     backgroundColor: "#ffffff",
    //   },
    // }),
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  whiteBox: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flex: 0.69,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  form: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 92,
  },

  title: {
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500,
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    lineHeight: 19,
  },

  button: {
    height: 51,
    borderRadius: 100,
    marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
  },

  btnTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 400,
  },

  secureBtn: {
    position: "absolute",
    bottom: "50%",
    right: 16,
  },

  secureBtnTitle: {
    color: "#1B4371",
    fontSize: 16,
    fontWeight: 400,
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
