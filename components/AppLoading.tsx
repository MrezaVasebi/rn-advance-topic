import { colors } from "@/colors";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const AppLoading = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size={"large"} color={colors.purple} />
    </View>
  );
};

export default AppLoading;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
