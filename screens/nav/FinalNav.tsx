// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { RootScreen } from "../../components";
import Main from "../Main";
import Animation from "../animation/Animation";

const Stack = createNativeStackNavigator();

function FinalNav() {
  return (
    <RootScreen>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Animation" component={Animation} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootScreen>
  );
}

export default FinalNav;
