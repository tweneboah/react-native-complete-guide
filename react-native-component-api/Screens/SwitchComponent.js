//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

//Renders a Boolean input

//his is a controlled component that requires an onValueChange callback that updates the value prop in order for the component to reflect user actions

// create a component
const SwitchComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = (props) => {
    setIsEnabled((prevState) => !prevState);
    console.log(isEnabled);
  };
  return (
    <View style={styles.container}>
      <Switch
        onValueChange={toggleSwitch}
        value={isEnabled}
        trackColor={{ false: "red", true: "red" }}
        thumbColor="green"
        ios_backgroundColor="black"
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
export default SwitchComponent;
