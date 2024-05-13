import { colors } from "@/colors";
import { Foundation } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

interface IPagination {
  onPress: (value: string) => void;
}

const Pagination = (props: IPagination) => {
  return (
    <View
      style={{
        ...styles.btnContainer,
        left: Dimensions.get("window").width * 0.35,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          ...styles.btnNextStyle,
          marginLeft: 10,
        }}
        onPress={() => props.onPress("inc")}
      >
        <Foundation name="next" color={colors.grey} size={30} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btnNextStyle}
        onPress={() => props.onPress("dec")}
      >
        <Foundation name="previous" color={colors.grey} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  btnContainer: {
    bottom: 20,
    padding: 10,
    position: "absolute",
    flexDirection: "row-reverse",
  },
  btnNextStyle: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green,
  },
});
