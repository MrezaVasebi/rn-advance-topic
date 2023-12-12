import React from "react";
import { StyleSheet } from "react-native";
import { RootScreen } from "../../components";
import { AppText } from "../../components/texts";

const Animation = () => {
  return (
    <RootScreen rootStyle={styles.rootStyle}>
      <AppText label="Animation" />
    </RootScreen>
  );
};

export default Animation;

const styles = StyleSheet.create({
  rootStyle: {
    padding: 20,
  },
});
