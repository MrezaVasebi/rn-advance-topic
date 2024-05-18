import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "./texts";

interface IAppRow {
  lbl: string;
  ans: string;
}

const AppRow = (props: IAppRow) => {
  return (
    <View style={styles.root}>
      <AppText
        label={`${props.lbl}: `}
        lblStyle={{ flex: 0.3, opacity: 0.5 }}
      />
      <AppText label={props.ans} lblStyle={{ flex: 0.7 }} />
    </View>
  );
};

export default AppRow;

const styles = StyleSheet.create({
  root: {
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
