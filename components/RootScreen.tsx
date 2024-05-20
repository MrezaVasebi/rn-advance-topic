import { colors } from "@/colors";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

interface IRootScreen extends ViewProps {
  bgColor?: string;
  rootStyle?: StyleProp<ViewStyle>;
}

const RootScreen = (props: IRootScreen) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* this piece of code is for solving notch problem in android and ios mobiles. */}
      <SafeAreaView
        style={{ flex: 0, backgroundColor: props.bgColor ?? colors.bgColor }}
      />

      <SafeAreaView
        style={{ flex: 1, backgroundColor: props.bgColor ?? colors.bgColor }}
      >
        <View
          children={props.children}
          style={[
            styles.rootStyle,
            { backgroundColor: props.bgColor ?? colors.bgColor },
            props.rootStyle,
          ]}
        />
      </SafeAreaView>
    </>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
});
