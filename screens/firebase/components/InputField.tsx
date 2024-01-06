import React from "react";
import { View } from "react-native";
import { AppInput } from "../../../components/inputs";
import { AppText } from "../../../components/texts";

interface IInputField {
  label: string;
  value: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  setValue: (value: string) => void;
}

const InputField = (props: IInputField) => {
  return (
    <View style={{ marginTop: 10 }}>
      <AppText label={props.label} />

      <AppInput
        value={props.value}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(value) => props.setValue(value)}
      />
    </View>
  );
};

export default InputField;
