import { colors } from "@/colors";
import { AppText } from "@/texts";
import React from "react";

interface IFormikError {
  label: string;
  rootStyle?: object;
}

const FormikError = (props: IFormikError) => {
  return (
    <AppText
      label={props.label}
      lblStyle={{ color: colors.red, ...props.rootStyle }}
    />
  );
};

export default FormikError;
