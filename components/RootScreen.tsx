import React from "react";
import { StatusBar, StyleSheet, View, ViewProps } from "react-native";

interface IRootScreen {
  rootStyle?: object;
}

const RootScreen = (props: ViewProps & IRootScreen) => {
  return (
    <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
      <StatusBar hidden />
      {props.children}
    </View>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    backgroundColor: "#F2F1EB",
    paddingTop: StatusBar.currentHeight,
  },
});
