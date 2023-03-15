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
  },

  title: {
    marginBottom: 33,
    marginTop: -50,
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
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
    fontFamily: "Roboto-Regular",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },

  button: {
    height: 51,
    borderRadius: 100,
    // marginHorizontal: 16,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    marginBottom: 16,
  },

  btnTitle: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
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
    fontFamily: "Roboto-Regular",
    // fontWeight: 400,
  },

  logRegTogglePageBox: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",

    alignItems: "center",
  },

  logRegTogglePageText: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    // fontWeight: 400,
  },

  photoBox: {
    position: "absolute",
    width: 120,
    height: 120,
    left: "50%",
    top: -60,
    marginLeft: -60,
  },

  changePhotoBtn: {
    width: 50,
    height: 50,
    marginLeft: "60%",
    padding: 10,
    // backgroundColor: "#FF6C00",
  },

  changeIconBtn: {
    width: 25,
    height: 25,
    // zIndex: 2,
    marginBottom: "-10%",
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
