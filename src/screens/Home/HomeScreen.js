import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./homeStyle";

export default HomeScreen = () => {
  return (
    <View style={styles.avaContainer}>
      <Image
        source={require("../../images/Rectangle_22.png")}
        style={styles.image}
      />
      <View style={styles.nameContainer}>
        <Text style={styles.textName}>Natali Romanova</Text>
        <Text style={styles.textEmail}>email@example.com</Text>
      </View>
    </View>
  );
};
