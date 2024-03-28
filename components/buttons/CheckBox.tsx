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

interface ICheckBox {
  label: string;
  btnStyle?: object;
  isChecked: boolean;
}

const CheckBox = (props: ICheckBox & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={{ ...styles.btnStyle, ...props.btnStyle }}
    >
      <View
        style={{
          ...styles.square,
          backgroundColor: props.isChecked ? colors.purple : colors.white,
        }}
      >
        <Entypo name="check" size={15} color={colors.white} />
      </View>

      <AppText label={props.label} />
    </TouchableOpacity>
  );
};

export default CheckBox;

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
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
