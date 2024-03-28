import { AppText } from "@/texts";
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import DrawerNavigation from "./DrawerNavigation";
import StackNavigation from "./StackNavigation";
import { colors } from "@/colors";

type RootStackParamList = {
  StackNavigation: undefined;
  // TabNavigation: undefined;
  DrawerNavigation: undefined;
};

export type PropsStackNavigation = NativeStackScreenProps<
  RootStackParamList,
  "StackNavigation"
>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

const KindOfNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="StackNavigation">
      <RootStack.Screen
        name="StackNavigation"
        component={StackNavigation}
        options={({ navigation, route }) => ({
          headerShown: true,

          // title: "Stack Navigation",

          // headerBackground: () => {
          //   return (
          //     <View style={styles.headerBackgroundStyle}>
          //       <TouchableOpacity onPress={() => {}}>
          //         <AppText label="Left Button" />
          //       </TouchableOpacity>
          //       <AppText label="label" />
          //       <TouchableOpacity onPress={() => {}}>
          //         <AppText label="Right Button" />
          //       </TouchableOpacity>
          //     </View>
          //   );
          // },

          // headerLeft: ({ canGoBack, label, tintColor }) => {
          //   return <AppText label={"Left"} lblStyle={{ marginRight: 10 }} />;
          // },

          // headerRight({ canGoBack, tintColor }) {
          //   return <AppText label="Right" />;
          // },

          // headerStyle: {
          //   backgroundColor: "red",
          // },

          // headerTitleAlign: "center",

          headerTitle({ children, tintColor }) {
            return <AppText label={"Stack Navigation"} />;
          },

          // headerTintColor: colors.green,

          // header({ navigation, options, route, back }) {
          //   return (
          //     <View style={styles.headerStyle}>
          //       <AppText label="Left" />
          //       <AppText label="Center" />
          //       <AppText label="Right" />
          //     </View>
          //   );
          // },

          // headerRight({ canGoBack, tintColor }) {
          //   return (
          //     <TouchableOpacity>
          //       <AppText label="Right" />
          //     </TouchableOpacity>
          //   );
          // },

          // headerTintColor: colors.purple,

          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
        })}
      />

      <RootStack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default KindOfNavigation;

const styles = StyleSheet.create({
  headerBackgroundStyle: {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: colors.red,
    justifyContent: "space-between",
  },
  headerStyle: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: colors.red,
    justifyContent: "space-between",
  },
});
