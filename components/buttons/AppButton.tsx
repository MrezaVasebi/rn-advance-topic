import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { AppText } from "../texts";

interface IAppButton {
  label: string;
  btnStyle?: {};
}

const AppButton = (props: IAppButton & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={{ ...styles.btnStyle, ...props.btnStyle }}
    >
      <AppText label={props.label} />
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btnStyle: {
    height: 35,
    width: "100%",
  },
});
