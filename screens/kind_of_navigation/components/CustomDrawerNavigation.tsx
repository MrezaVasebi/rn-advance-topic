import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from "@react-navigation/drawer/lib/typescript/src/types";
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { colors } from "@/colors";

interface ICustomDrawerNavigation {
  descriptors: DrawerDescriptorMap;
  navigation: DrawerNavigationHelpers;
  state: DrawerNavigationState<ParamListBase>;
}

const CustomDrawerNavigation = (props: ICustomDrawerNavigation) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert("Link to help")} />
      <DrawerItem
        label={"Test"}
        onPress={() => {}}
        style={{
          backgroundColor: colors.white,
        }}
        labelStyle={{
          fontSize: 20,
          color: colors.purple,
          fontFamily: "medium",
        }}
        focused={false}
        pressOpacity={0.5}
        pressColor={colors.green}
        icon={({ color, focused, size }) => {
          return <Ionicons name="link" size={size} color={color} />;
        }}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerNavigation;
