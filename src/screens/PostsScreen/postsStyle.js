import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#fff",
  },
  postContainer: {
    width: "100%",
    marginBottom: 34,
    // borderWidth: 1,
    // borderColor: "#212121",
  },
  postImage: {
    width: "100%",
    borderRadius: 8,
  },
  postTitleContainer: {
    marginTop: 8,
  },
  postTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    opacity: 1,
  },
  postInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  postDataContainers: {
    flexDirection: "row",
    alignItems: "center",
    // paddingRight: "100%",
  },
  postIcon: {
    marginLeft: 3,
    marginRight: 9,
  },
  postText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
