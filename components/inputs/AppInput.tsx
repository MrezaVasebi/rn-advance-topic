import { colors } from "@/colors";
import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

const AppInput = (
  props: TextInputProps & {
    inputStyle?: object;
  }
) => {
  return (
    <TextInput
      value={props.value}
      onBlur={props.onBlur}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      style={{ ...styles.inputStyle, ...props.inputStyle }}
    />
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    elevation: 2,
    fontSize: 14,
    marginTop: 10,
    borderRadius: 5,
    fontFamily: "medium",
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
});
