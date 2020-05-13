import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import PostListScreen from "../Screens/PostListScreen";
import { Button, Text } from "react-native";

const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Posts"
        screenOptions={{
          headerStyle: {
            backgroundColor: "red",
          },
        }}
        mode="modal"
        // headerMode="none"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: "black",
            },
            title: "Home overview",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerTransparent: true,
            headerRight: () => <Text>left</Text>,
          }}
        />
        <Stack.Screen name="Posts" component={PostListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
