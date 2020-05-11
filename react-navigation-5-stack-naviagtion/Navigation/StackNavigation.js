import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import PostListScreen from "../Screens/PostListScreen";
import { Button } from "react-native";

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" mode="modal">
        <Stack.Screen
          name="Posts"
          component={PostListScreen}
          options={{
            // header: () => null,
            headerTitleAlign: "center",
            headerRight: () => <Button title="Done" />,
            headerStyle: {
              backgroundColor: "green",
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
