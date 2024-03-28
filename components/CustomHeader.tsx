import { colors } from "@/colors";
import { ParamListBase, Route } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AppButton } from "./buttons";
import { AppText } from "./texts";

interface ICustomHeader {
  rightLabel?: string;
  route: Route<string>;
  back?: { title: string };
  onPressRightButton: () => void;
  options: NativeStackNavigationOptions;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}

const CustomHeader = (props: ICustomHeader) => {
  const handleOnPressRight = () => {
    // props.navigation.goBack();
    // console.log(props.back);
    // console.log(props.option);

    props.onPressRightButton();
  };

  const handleOnPressLeft = () => {
    props.navigation.goBack();
    // console.log(props.back);
    // console.log(props.options);
  };

  return (
    <View style={styles.headerStyle}>
      <AppButton
        label="Back"
        btnStyle={styles.btnBack}
        onPress={handleOnPressLeft}
        lblStyle={{ color: colors.white }}
      />

      <View style={styles.titleContainer}>
        <AppText label={props.route.name} lblStyle={styles.lblTitleStyle} />
      </View>

      <AppButton
        btnStyle={styles.btnBack}
        onPress={handleOnPressRight}
        label={props.rightLabel ?? ""}
        lblStyle={{ color: colors.white }}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerStyle: {
    height: 45,
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: colors.darkBlue,
  },
  btnBack: {
    borderWidth: 0,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  lblTitleStyle: {
    fontSize: 20,
    color: colors.yellow,
  },
});
