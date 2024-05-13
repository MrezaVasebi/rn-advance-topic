import { colors } from "@/colors";
import { AppText } from "@/texts";
import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { User } from "types";

const UserCart = ({
  item,
  style,
}: {
  item: User;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[styles.cartStyle, style]}>
      <AppText label={item?.name} />
      <AppText label={item?.email} />
      <AppText label={item?.phone} />
      <AppText label={item?.website} />
    </View>
  );
};

export default UserCart;

const styles = StyleSheet.create({
  cartStyle: {
    padding: 10,
    elevation: 2,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
});
