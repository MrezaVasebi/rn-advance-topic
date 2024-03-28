import { AppButton } from "@/buttons";
import RootScreen from "@/RootScreen";
import { AppText } from "@/texts";
import React from "react";
import { StyleSheet } from "react-native";
import { PropsStackNavigation } from "./KindOfNavigation";

const StackNavigation = ({ navigation, route }: PropsStackNavigation) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: ({ canGoBack, tintColor }) => {
  //       return (
  //         <TouchableOpacity>
  //           <AppText label="Right" />
  //         </TouchableOpacity>
  //       );
  //     },
  //   });
  // }, [navigation]);

  return (
    <RootScreen rootStyle={styles.root}>
      <AppText label="Stack Navigation" lblStyle={{ fontSize: 20 }} />
      <AppButton
        label="Go to Drawer Navigation"
        btnStyle={{ marginTop: 10 }}
        onPress={() => navigation.navigate("DrawerNavigation")}
      />
    </RootScreen>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyle: {
    padding: 10,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
});
