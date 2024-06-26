import { colors } from "@/colors";
import { AppText } from "@/texts";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ILoadingButton {
  label: string;
  loading: boolean;
  btnStyle?: object;
  lblStyle?: object;
  loadingColor?: string;
}

const LoadingButton = (props: TouchableOpacityProps & ILoadingButton) => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      onPress={props.onPress}
      style={{ ...styles.btnStyle, ...props.btnStyle }}
    >
      {props.loading ? (
        <ActivityIndicator
          size={"small"}
          color={props.loadingColor ?? colors.white}
        />
      ) : (
        <AppText label={props.label} lblStyle={props.lblStyle} />
      )}
    </TouchableOpacity>
  );
};

export default LoadingButton;

const styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "center",
    borderColor: colors.purple,
  },
});
