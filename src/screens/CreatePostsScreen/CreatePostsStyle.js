import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  postContainer: {
    width: "100%",
    marginBottom: 8,
    // borderWidth: 1,
    // borderColor: "#212121",
  },
  postImage: {
    width: "100%",
    borderRadius: 8,
  },
  loadImgBtnContainer: {
    position: "absolute",
    top: "50%",
    marginTop: -30,
    left: "50%",
    marginLeft: -30,
    // borderWidth: 1,
    // borderColor: "#212121",
  },
  loadImgBtn: {
    width: 60,
    height: 60,
  },
  postTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    opacity: 1,
  },
  formContainer: {
    borderWidth: 1,
    borderColor: "#212121",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#212121",
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: "#212121",
  },
});
