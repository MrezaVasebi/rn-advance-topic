import React from "react";
import { StatusBar, StyleSheet, View, ViewProps } from "react-native";
import { colors } from "../ui-config";

interface IRootScreen {
  rootStyle?: object;
}

const RootScreen = (props: ViewProps & IRootScreen) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />

      <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
        {props.children}
      </View>
    </View>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingTop: StatusBar.currentHeight,
  },
});
