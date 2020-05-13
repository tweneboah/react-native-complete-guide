//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// create a component
const ButtonComponent = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Register"
        onPress={(props) => console.log(props)}
        color="yellow"
        disabled={true}
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
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default ButtonComponent;
