//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//Pressing Events
//You can wrap it with any component
// create a component
const TouchableOpacityComponent = () => {
  const [count, setCount] = useState(0);
  const pressMe = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 40 }}>Total Click {count}</Text>
      <TouchableOpacity
        style={styles.txt}
        onPress={pressMe}
        activeOpacity={0.1}
      >
        <Text>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
  txt: {
    padding: 10,
    backgroundColor: "pink",
    marginTop: 20,
  },
});

//make this component available to the app
export default TouchableOpacityComponent;
