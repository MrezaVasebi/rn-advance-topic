import React from "react";
import { StyleSheet } from "react-native";
import { RootScreen } from "../../components";
import { AppText } from "../../components/texts";
import { PropsTopHeader } from "./KindOfNavigation";

const TopHeader = ({ navigation, route }: PropsTopHeader) => {
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
    </RootScreen>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
