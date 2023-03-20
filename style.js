import { StyleSheet, Platform } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // resizeMode: "cover",
    // justifyContent: "center",
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
    justifyContent: "flex-end",
  },
});
