import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "flex-end",
  },

  //   container: {
  //     flex: 1,
  //   },

  container: {
    flex: 1,
    justifyContent: "flex-end",

    alignItems: "flex-start",

    // backgroundColor: "#fff",
  },
  whiteBox: {
    flex: 0.8,
    width: "100%",

    // justifyContent: "flex-end",
    alignItems: "center",
    // marginHorizontal: 16,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingBottom: 50,
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
