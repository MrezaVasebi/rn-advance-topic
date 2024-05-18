import { colors } from "@/colors";
import { AppText } from "@/texts";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface IAppButton {
  label: string;
  btnStyle?: StyleProp<ViewStyle>;
  lblStyle?: {};
}

const AppButton = (props: IAppButton & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={[styles.btnStyle, props.btnStyle]}
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
