import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors } from "../../ui-config";

const AppInput = (
  props: TextInputProps & {
    inputStyle?: object;
  }
) => {
  return (
    <TextInput
      value={props.value}
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
    borderRadius: 10,
    fontFamily: "medium",
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
});
