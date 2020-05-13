//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

//ActivityIndicator: Displays a circular loading indicator.

// create a component
const ActitivityIndicatorComponentScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="yellow" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default ActitivityIndicatorComponentScreen;
