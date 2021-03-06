//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// create a component
const PostListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Post Screen</Text>
      <Button
        title="Go home"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
});

//make this component available to the app
export default PostListScreen;
