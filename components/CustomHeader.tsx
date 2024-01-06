import { ParamListBase, Route } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../ui-config";
import AppButton from "./buttons/AppButton";
import { AppText } from "./texts";

interface ICustomHeader {
  route: Route<string>;
  back?: { title: string };
  options: NativeStackNavigationOptions;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}

const CustomHeader = (props: ICustomHeader) => {
  return (
    <View style={styles.headerStyle}>
      <AppButton
        onPress={() => {
          props.navigation.goBack();
          // console.log(props.back);
          // console.log(props.options);
        }}
        label="Back"
        btnStyle={styles.btnBack}
        lblStyle={{ color: colors.white }}
      />

      <View style={styles.titleContainer}>
        <AppText label={props.route.name} lblStyle={styles.lblTitleStyle} />
      </View>

      <AppButton
        onPress={() => {
          props.navigation.goBack();
          // console.log(props.back);
          // console.log(props.option);
        }}
        label=""
        btnStyle={styles.btnBack}
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
