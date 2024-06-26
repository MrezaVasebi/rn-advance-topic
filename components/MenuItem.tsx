import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import { AppButton } from "./buttons";

interface IMenuItem {
  label: string;
  rootStyle?: object;
}

const MenuItem = (props: TouchableOpacityProps & IMenuItem) => {
  return (
    <AppButton
      label={props.label}
      onPress={props.onPress}
      btnStyle={{ ...styles.btnStyle, ...props.rootStyle }}
    />
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  btnStyle: {
    elevation: 2,
    borderWidth: 0,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
