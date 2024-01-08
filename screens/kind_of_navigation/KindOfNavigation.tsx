import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import { AppText } from "../../components/texts";
import { colors } from "../../ui-config";
import TopHeader from "./TopHeader";

type RootStackParamList = {
  TopHeader: undefined;
};

export type PropsTopHeader = NativeStackScreenProps<
  RootStackParamList,
  "TopHeader"
>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

const KindOfNavigation = () => {
  return (
    <RootStack.Navigator initialRouteName="TopHeader">
      <RootStack.Screen
        name="TopHeader"
        component={TopHeader}
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

          headerTitle(props) {
            return <AppText label={"Stack Navigation"} />;
          },

          // headerTintColor: colors.green,
          // header(props) {
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
