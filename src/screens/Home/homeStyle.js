import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  avaContainer: {
    flexDirection: "row",
    height: 60,
    marginBottom: 32,
    marginTop: 32,
  },
  image: {
    width: 60,
    height: 60,
  },
  nameContainer: {
    marginLeft: 8,
    justifyContent: "center",
  },
  textName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  textEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
    opacity: 0.8,
  },
});
