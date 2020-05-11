import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation.navigate);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Home</Text>

      <Button
        title="Go to post"
        onPress={() =>
          props.navigation.navigate("Posts", {
            postId: 1,
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
