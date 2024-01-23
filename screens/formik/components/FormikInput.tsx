import React from "react";
import { TextInputProps, View } from "react-native";
import { AppInput } from "../../../components/inputs";
import FormikError from "./FormikError";

interface IFormikInput extends TextInputProps {
  error?: string;
  rootStyle?: object;
}

const FormikInput = ({ error, rootStyle, ...props }: IFormikInput) => {
  return (
    <View style={{ ...rootStyle }}>
      <AppInput {...props} />

      {error && (
        <FormikError rootStyle={{ marginTop: 5 }} label={error ?? ""} />
      )}
    </View>
  );
};

export default FormikInput;
