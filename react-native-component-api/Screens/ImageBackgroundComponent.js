import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

//ImageBackground:
//backgroun image = from web
//It takes the same props as the Image

const ImageBackgroundComponent = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={5}
        style={styles.img}
        source={{
          uri:
            "https://cdn.pixabay.com/photo/2020/04/18/17/17/fantasy-5060076_1280.jpg",
        }}
      >
        <Text style={styles.txt}>Get Started</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  txt: {
    color: "#fab1a0",
    fontSize: 50,
    fontWeight: "bold",
    marginLeft: 60,
    borderRightColor: "red",
  },
});
export default ImageBackgroundComponent;
