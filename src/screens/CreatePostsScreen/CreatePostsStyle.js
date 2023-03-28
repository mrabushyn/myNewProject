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
    marginBottom: 48,
  },
  formContainer: {
    // borderWidth: 1,
    // borderColor: "#212121",
    width: "100%",
  },
  inputContainer: {
    // borderWidth: 1,
    // borderColor: "#212121",
  },
  buttonContainer: {
    // borderWidth: 1,
    // borderColor: "#212121",
  },
  input: {
    height: 50,
    padding: 15,
    paddingLeft: 29,
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomColor: "#E8E8E8",
    marginBottom: 16,
    backgroundColor: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 20,
  },

  button: {
    height: 51,
    borderRadius: 100,
    // marginHorizontal: 16,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 16,
  },

  btnTitle: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    // fontWeight: 400,
  },
  locationIcon: {
    position: "absolute",
    bottom: 33,
    zIndex: 1,
    left: 2,
  },
});
