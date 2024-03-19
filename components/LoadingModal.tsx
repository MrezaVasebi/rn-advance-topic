import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { colors } from "../ui-config";

const LoadingModal = () => {
  return (
    <Modal transparent statusBarTranslucent animationType="fade">
      <View style={styles.rootStyle}>
        <ActivityIndicator size={"large"} color={colors.white} />
      </View>
    </Modal>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.5)",
  },
});
