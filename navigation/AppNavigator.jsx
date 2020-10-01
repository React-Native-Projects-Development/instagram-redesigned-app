import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Discover from "../screens/Discover";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          cardStyleInterpolator:
            Platform.OS == "ios"
              ? CardStyleInterpolators.forHorizontalIOS
              : CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{
          cardStyleInterpolator:
            Platform.OS == "ios"
              ? CardStyleInterpolators.forHorizontalIOS
              : CardStyleInterpolators.forNoAnimation,
        }}
      />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
};
