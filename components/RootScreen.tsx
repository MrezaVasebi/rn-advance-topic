import { colors } from "@/colors";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";

interface IRootScreen extends ViewProps {
  rootStyle?: object;
}

const RootScreen = (props: IRootScreen) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* this piece of code is for solving notch problem in android and ios mobiles. */}
      <SafeAreaView style={{ flex: 0, backgroundColor: colors.bgColor }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.bgColor }}>
        <View
          children={props.children}
          style={{ ...styles.rootStyle, ...props.rootStyle }}
        />
      </SafeAreaView>
    </>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
});
