import { colors } from "@/colors";
import { AppText } from "@/texts";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

interface IRadioButton {
  label: string;
  btnStyle?: object;
  isChecked: boolean;
}

const RadioButton = (props: IRadioButton & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={{ ...styles.btnStyle, ...props.btnStyle }}
    >
      <View
        style={{
          ...styles.square,
          borderWidth: props.isChecked ? 0 : 1,
          backgroundColor: props.isChecked ? colors.purple : colors.white,
        }}
      >
        <Entypo name="check" size={13} color={colors.white} />
      </View>

      <AppText label={props.label} />
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: "center",
    flexDirection: "row",
  },
  square: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
