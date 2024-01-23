import React from "react";
import { AppText } from "../../../components/texts";
import { colors } from "../../../ui-config";

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
