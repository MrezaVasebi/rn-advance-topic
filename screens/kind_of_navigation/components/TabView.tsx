import React from "react";
import { StyleSheet, View } from "react-native";
import { AppButton } from "../../../components/buttons";
import { AppText } from "../../../components/texts";

interface ITabView {
  title: string;
  label: string;
  onPress: () => void;
}

const TabView = (props: ITabView) => {
  return (
    <View style={styles.tabStyle}>
      <AppText label={props.title} lblStyle={{ fontSize: 30 }} />

      <AppButton
        label={props.label}
        onPress={props.onPress}
        btnStyle={{ marginTop: 20 }}
      />
    </View>
  );
};

export default TabView;

const styles = StyleSheet.create({
  tabStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
