import { colors } from "@/colors";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { User } from "types";
import { AppRow } from "..";

interface IUserCart {
  item: User;
  style?: StyleProp<ViewStyle>;
}

const UserCart = (props: IUserCart & ViewProps) => {
  return (
    <View style={[styles.cartStyle, props.style]}>
      <AppRow lbl="Name" ans={props.item?.name} />
      <AppRow lbl="Email" ans={props.item?.email} />
      <AppRow lbl="Phone" ans={props.item?.phone} />
      <AppRow lbl="Website" ans={props.item?.website} />
    </View>
  );
};

export default UserCart;

const styles = StyleSheet.create({
  cartStyle: {
    padding: 10,
    elevation: 2,
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: colors.white,
  },
});
