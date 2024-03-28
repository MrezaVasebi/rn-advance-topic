import { colors } from "@/colors";
import { AppText } from "@/texts";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const GoBackButton = (props: TouchableOpacityProps & { label: string }) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.returnContainer}>
      <AntDesign name="arrowleft" size={20} color={colors.black} />

      <AppText label={props.label} lblStyle={styles.returnLblStyle} />
    </TouchableOpacity>
  );
};

export default GoBackButton;

const styles = StyleSheet.create({
  returnContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  returnLblStyle: {
    fontSize: 20,
    marginLeft: 10,
    color: colors.purple,
  },
});
