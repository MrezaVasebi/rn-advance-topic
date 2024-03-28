import { AppButton } from "@/buttons";
import { colors } from "@/colors";
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

interface ICustomTabNavigation {
  descriptors: BottomTabDescriptorMap;
  insets: EdgeInsets;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  state: TabNavigationState<ParamListBase>;
}

/*
state content:
const state = {
  type: 'stack',
  key: 'stack-1',
  routeNames: ['Home', 'Profile', 'Settings'],
  routes: [
    {
      key: 'home-1',
      name: 'Home',
      state: {
        key: 'tab-1',
        routeNames: ['Feed', 'Library', 'Favorites'],
        routes: [
          { key: 'feed-1', name: 'Feed', params: { sortBy: 'latest' } },
          { key: 'library-1', name: 'Library' },
          { key: 'favorites-1', name: 'Favorites' },
        ],
        index: 0,
      },
    },
    { key: 'settings-1', name: 'Settings' },
  ],
  index: 1,
};
*/

const CustomTabNavigation = (props: ICustomTabNavigation) => {
  // console.log({ props.insets });
  // console.log({ props.descriptors });
  // console.log({ props.navigation });
  // console.log(JSON.stringify(props.state, null, 2));

  return (
    <View style={styles.rootTabStyle}>
      {props.state?.routeNames.map((el, index) => {
        return (
          <AppButton
            key={index}
            onPress={() => {
              if (el === "TabA") {
                props.navigation.navigate("TabA");
              } else if (el === "TabB") {
                props.navigation.navigate("TabB");
              } else if (el === "TabC") {
                props.navigation.navigate("TabC");
              }
            }}
            label={el}
            btnStyle={{
              borderWidth: 0,
            }}
            lblStyle={{
              fontSize: index === props.state.index ? 15 : 12,
              color: index === props.state.index ? colors.black : colors.green,
            }}
          />
        );
      })}
    </View>
  );
};

export default CustomTabNavigation;

const styles = StyleSheet.create({
  rootTabStyle: {
    left: 20,
    right: 20,
    bottom: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderColor: colors.purple,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
});
