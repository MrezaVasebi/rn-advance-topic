import { colors } from "@/colors";
import { AppText } from "@/texts";
import React from "react";
import { StyleSheet, View } from "react-native";

const UserCart = ({ item }: { item: any }) => {
  return (
    <View style={styles.cartStyle}>
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
