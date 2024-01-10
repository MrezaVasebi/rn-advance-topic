import React from "react";
import { StyleSheet, View } from "react-native";
import { AppButton } from "../../../components/buttons";
import { AppText } from "../../../components/texts";

interface IMainView {
  title: string;
  label: string;
  rootStyle?: object;
  onPress: () => void;
}

const ManView = (props: IMainView) => {
  return (
    <View style={{ ...styles.rootStyle, ...props.rootStyle }}>
      <AppText label={props.title} lblStyle={{ fontSize: 30 }} />

      <AppButton
        label={props.label}
        onPress={props.onPress}
        btnStyle={{ marginTop: 20 }}
      />
    </View>
  );
};

export default ManView;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
