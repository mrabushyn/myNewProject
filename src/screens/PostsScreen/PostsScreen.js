import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import HomeScreen from "../Home/HomeScreen";
import { styles } from "./postsStyle";

// const data = [
//   {
//     id: "1",
//     title: "Ліс",
//     image: "../../images/Rectangle_23.png",
//     location: "Ivano-Frankivs'k Region, Ukraine",
//   },
//   {
//     id: "2",
//     title: "Ліс",
//     image: "../../images/Rectangle_23.png",
//     location: "Ivano-Frankivs'k Region, Ukraine",
//   },
//   {
//     id: "3",
//     title: "Ліс",
//     image: "../../images/Rectangle_23.png",
//     location: "Ivano-Frankivs'k Region, Ukraine",
//   },
// ];

export default PostsScreen = () => {
  return (
    //     <FlatList
    //   data={data}
    //   keyExtractor={item => item.id}
    //   renderItem={({ item }) => (
    //     <View>
    //       <Text>{item.text}</Text>
    //     </View>
    //   )}
    // />

    <View style={styles.container}>
      <HomeScreen />
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.postContainer}>
          <Image
            source={require("../../images/Rectangle_23.png")}
            style={styles.postImage}
          />
          <View style={styles.postTitleContainer}>
            <Text style={styles.postTitle}>Ліс</Text>
          </View>
          <View style={styles.postInfoContainer}>
            <View style={styles.postDataContainers}>
              <Image
                source={require("../../images/Shape.png")}
                style={styles.postIcon}
              />
              <Text
                style={{
                  ...styles.postText,
                  color: "#BDBDBD",
                  textDecorationLine: "none",
                }}
              >
                0
              </Text>
            </View>
            <View style={styles.postDataContainers}>
              <Image
                source={require("../../images/map-pin.png")}
                style={styles.postIcon}
              />
              <Text style={styles.postText}>
                Ivano-Frankivs'k Region, Ukraine
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.postContainer}>
          <Image
            source={require("../../images/Rectangle_23_1.png")}
            style={styles.postImage}
          />
          <View style={styles.postTitleContainer}>
            <Text style={styles.postTitle}>Захід сонця на Чорному морі</Text>
          </View>
          <View style={styles.postInfoContainer}>
            <View style={styles.postDataContainers}>
              <Image
                source={require("../../images/Shape.png")}
                style={styles.postIcon}
              />
              <Text
                style={{
                  ...styles.postText,
                  color: "#BDBDBD",
                  textDecorationLine: "none",
                }}
              >
                0
              </Text>
            </View>
            <View style={styles.postDataContainers}>
              <Image
                source={require("../../images/map-pin.png")}
                style={styles.postIcon}
              />
              <Text style={styles.postText}>Crimea, Ukraine</Text>
            </View>
          </View>
        </View>

        <View style={styles.postContainer}>
          <Image
            source={require("../../images/Rectangle_23_2.png")}
            style={styles.postImage}
          />
          <View style={styles.postTitleContainer}>
            <Text style={styles.postTitle}>Старий будиночок у Венеції</Text>
          </View>
          <View style={styles.postInfoContainer}>
            <View style={styles.postDataContainers}>
              <Image
                source={require("../../images/Shape.png")}
                style={styles.postIcon}
              />
              <Text
                style={{
                  ...styles.postText,
                  color: "#BDBDBD",
                  textDecorationLine: "none",
                }}
              >
                0
              </Text>
            </View>
            <View style={styles.postDataContainers}>
              <Image
                source={require("../../images/map-pin.png")}
                style={styles.postIcon}
              />
              <Text style={styles.postText}> Italy</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
