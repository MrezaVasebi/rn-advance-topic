import React from "react";
import { StyleSheet, TouchableOpacityProps } from "react-native";
import AppButton from "./buttons/AppButton";

interface IMenuItem {
  label: string;
}

const MenuItem = (props: TouchableOpacityProps & IMenuItem) => {
  return (
    <AppButton
      label={props.label}
      onPress={props.onPress}
      btnStyle={styles.btnStyle}
    />
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  btnStyle: {
    elevation: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
