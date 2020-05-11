//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const PostListScreen = (props) => {
  console.log(props.route.params.postId);
  return (
    <View style={styles.container}>
      <Text>PostListScreen</Text>
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
