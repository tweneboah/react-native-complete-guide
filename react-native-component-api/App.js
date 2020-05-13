// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackgroundBase,
//   TouchableHighlight,
// } from "react-native";
// import ImageComponent from "./Screens/ImageComponent";
// import ImageBackgroundComponent from "./Screens/ImageBackgroundComponent";
// import TextInputComponent from "./Screens/TextInputComponent";
// import ButtonComponent from "./Screens/ButtonComponent";
// import SwitchComponent from "./Screens/SwitchComponent";
// import ActitivityIndicatorComponentScreen from "./Screens/ActitivityIndicatorComponentScreen";
// import SafeAreaViewComponent from "./Screens/SafeAreaViewComponent";
// import TouchableOpacityComponent from "./Screens/TouchableOpacityComponent";
// import ScrollViewComponent from "./Screens/ScrollViewComponent";

// export default function App() {
//   return <ScrollViewComponent />;
// }

//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

//Instruct expo and our App component to load the font
//Remember this function returns a promise so we will retunr it and wherever we will use it we will wait for this function to resovle before continue

//We can use this function directly but since this will take some time we will await for it load before rendering our component hence we will use ApplLoading from expo. This is a special component that will not display the screen when the app launches, we will prolong the displaying time

//Create a state for it

//startAsync = our custom function we want to start when the app loads and it must return a promise because expo will wait for that promise to resolve before rendering your component

//onFinish = our custom function that will run when startAsync finishes

// create a component
const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  console.log(fontLoaded);
  const fetchFonts = () => {
    return Font.loadAsync({
      "Bitter-Bold": require("./assets/fonts/Bitter-Bold.ttf"),
    });
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={console.log("err")}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>App</Text>
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
  txt: {
    fontFamily: "Bitter-Bold",
    fontSize: 30,
  },
});

//make this component available to the app

export default App;
