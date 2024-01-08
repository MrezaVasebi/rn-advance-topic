import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { RootScreen } from "../../components";
import { PropsUserDetails } from "../nav/FinalNav";

const UserDetails = ({ route, navigation }: PropsUserDetails) => {
  useEffect(() => {
    navigation.setOptions({
      // headerRight({ canGoBack, tintColor }) {
      //   return (
      //     <TouchableOpacity onPress={() => {}}>
      //       <AppText label="Right" />
      //     </TouchableOpacity>
      //   );
      // },
      // headerLeft(props) {
      //   return <AppText label="Left" />;
      // },
    });
  }, [navigation]);

  return <RootScreen></RootScreen>;
};

export default UserDetails;

const styles = StyleSheet.create({});
