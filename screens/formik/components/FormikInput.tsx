import { AppInput } from "@/inputs";
import { useFormikContext } from "formik";
import React from "react";
import { TextInputProps, View } from "react-native";
import FormikError from "./FormikError";

interface IFormikInput extends TextInputProps {
  name: string;
  rootStyle?: object;
}

const FormikInput = ({ rootStyle, ...props }: IFormikInput) => {
  let { name } = props;
  const { handleBlur, handleChange, touched, errors } = useFormikContext();

  return (
    <View style={{ ...rootStyle }}>
      <AppInput
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
        {...props}
      />

      {touched[name] && errors[name] && <FormikError label={errors[name]} />}
    </View>
  );
};

export default FormikInput;
