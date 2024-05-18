import { colors } from "@/colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { UserTodo } from "types";
import { AppRow } from "..";

const TodoCart = ({ data }: { data: UserTodo }) => {
  return (
    <View style={styles.cartStyle}>
      <View style={{ paddingLeft: 15 }}>
        <AppRow ans={data?.userId.toString()} lbl="UserId" />
        <AppRow ans={data?.title} lbl="Title" />
      </View>

      <View
        style={{
          width: 7,
          height: "100%",
          position: "absolute",
          backgroundColor: data.completed ? colors.green : colors.red,
        }}
      />
    </View>
  );
};

export default TodoCart;

const styles = StyleSheet.create({
  cartStyle: {
    elevation: 2,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
});
