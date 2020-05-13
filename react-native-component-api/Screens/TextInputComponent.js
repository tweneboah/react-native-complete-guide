//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";

//input text into your app

//PROPS

//onChangeText

//autoCapitalize

//values:
/**
 * characters: all characters.
words: first letter of each word.
sentences: first letter of each sentence (default).
none: don't auto capitalize anything.
 */

//autoCompleteType
//autoCorrect
//autoFocus default false
//editable={false} view only
//keyboardType
// maxLength={2} Use this instead of implementing the logic in JS to avoid flicker.
// multiline={false} // text move to next line
//  numberOfLines={2} android
//onChnage : This comes with native events
//onChangeText passes only a single string
//secureTextEntry = password
//textAlign="center"
// create a component
const TextInputComponent = () => {
  const [username, setUsername] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          inlineImageLeft="search"
          editable={true}
          autoCapitalize="words"
          placeholder="Username"
          style={styles.inp}
          autoCompleteType="off"
          autoCorrect={true}
          maxLength={200}
          multiline={true}
          numberOfLines={2}
          onChange={(props) => {
            if (props.nativeEvent.text.length > 90) {
              alert("GO SLOW");
            }
          }}
          onChangeText={(props) => {
            console.log("Another", props);
          }}
          onKeyPress={(ar) => console.log(ar)}
          placeholderTextColor="red"
          selectionColor="yellow"
          textAlign="center"
        />
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dfe6e9",
  },
  inp: {
    borderWidth: 1,
    height: 40,
    width: 100,
    borderColor: "#636e72",
  },
});

//make this component available to the app
export default TextInputComponent;
