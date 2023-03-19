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

  navigate: {
    borderWidth: 1,
    position: "absolute",
    left: "20%",
    top: 50,
    marginLeft: -25,
    borderColor: "#E8E8E8",
    backgroundColor: "#FF6C00",
    width: 50,
    height: 50,
    alignContent: "center",
    justifyContent: "center",
  },
});
