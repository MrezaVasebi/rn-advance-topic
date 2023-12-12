import { ParamListBase, Route } from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "./buttons/AppButton";
import { AppText } from "./texts";

interface ICustomHeader {
  route: Route<string>;
  back?: { title: string };
  option: NativeStackNavigationOptions;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}

const CustomHeader = (props: ICustomHeader) => {
  return (
    <View style={styles.headerStyle}>
      <AppButton
        onPress={() => {
          props.navigation.goBack();
          // console.log(props.back);
          // console.log(props.option);
        }}
        label="Back"
        btnStyle={styles.btnBack}
        lblStyle={{ color: "white" }}
      />

      <View style={styles.titleContainer}>
        <AppText label={props.route.name} lblStyle={styles.lblTitleStyle} />
      </View>

      {/* <AppButton
        onPress={() => {
          props.navigation.goBack();
          // console.log(props.back);
          // console.log(props.option);
        }}
        label="Right"
        btnStyle={styles.btnBack}
        lblStyle={{ color: "white" }}
      /> */}
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
    backgroundColor: "#264653",
    justifyContent: "space-between",
  },
  btnBack: {
    width: 35,
    height: 20,
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  lblTitleStyle: {
    fontSize: 20,
    color: "#ffc300",
  },
});
