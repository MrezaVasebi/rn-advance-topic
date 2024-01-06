import React from "react";
import { StyleSheet } from "react-native";
import { RootScreen } from "../../components";
import Auth from "./Auth";

const Firebase = () => {
  return (
    <RootScreen rootStyle={styles.rootStyle}>
      <Auth />
    </RootScreen>
  );
};

export default Firebase;

const styles = StyleSheet.create({
  rootStyle: {
    padding: 20,
  },
});
