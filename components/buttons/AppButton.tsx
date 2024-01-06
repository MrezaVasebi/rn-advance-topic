import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "../../ui-config";
import { AppText } from "../texts";

interface IAppButton {
  label: string;
  btnStyle?: {};
  lblStyle?: {};
}

const AppButton = (props: IAppButton & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={{ ...styles.btnStyle, ...props.btnStyle }}
    >
      <AppText lblStyle={{ ...props.lblStyle }} label={props.label} />
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: colors.purple,
  },
});
