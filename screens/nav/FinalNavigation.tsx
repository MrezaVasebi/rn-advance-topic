import { colors } from "@/colors";
import RootScreen from "@/RootScreen";
import { AppText } from "@/texts";
import { NavigationContainer } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { FormikApp } from "screens/formik";
import { KindOfNavigation } from "screens/kind_of_navigation";
import Main from "screens/Main";
import { LocalNotification } from "screens/notification";

type RootStackParamList = {
  Main: undefined;
  FormikApp: undefined;
  KindOfNavigation: undefined;
  LocalNotification: undefined;
};

export type PropsLocalNotification = NativeStackScreenProps<
  RootStackParamList,
  "LocalNotification"
>;

export type PropsFormikApp = NativeStackScreenProps<
  RootStackParamList,
  "FormikApp"
>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

const FinalNavigation = () => {
  return (
    <RootScreen>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Main"
          screenOptions={
            {
              // headerTintColor: "#fff",
              // headerStyle: { backgroundColor: "green" },
              // headerTitleStyle: { fontFamily: "medium", fontSize: 25 },
            }
          }
        >
          <RootStack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />

          <RootStack.Screen
            name="KindOfNavigation"
            component={KindOfNavigation}
            options={{ headerShown: false }}
          />

          <RootStack.Screen
            name="FormikApp"
            component={FormikApp}
            options={({ navigation, route }) => ({
              headerShown: false,
              headerTitle({ children, tintColor }) {
                return (
                  <AppText label={route.name} lblStyle={styles.titleStyle} />
                );
              },
            })}
          />

          <RootStack.Screen
            name="LocalNotification"
            component={LocalNotification}
            options={({ navigation, route }) => ({
              headerShown: false,
            })}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </RootScreen>
  );
};

export default FinalNavigation;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    color: colors.purple,
  },
});
