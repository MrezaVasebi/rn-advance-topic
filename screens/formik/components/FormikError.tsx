import { colors } from "@/colors";
import { AppText } from "@/texts";
import React from "react";

const FormikError = ({
  label,
  rootStyle,
}: {
  label: string;
  rootStyle?: object;
}) => {
  return (
    <AppText label={label} lblStyle={{ color: colors.red, ...rootStyle }} />
  );
};

export default FormikError;
