import { AppButton, GoBackButton } from "@/buttons";
import RootScreen from "@/RootScreen";
import React from "react";
import { StyleSheet, View } from "react-native";
import { PropsLocalNotification } from "screens/nav/FinalNavigation";

import { AppText } from "@/texts";
import { useLocalNotification } from "./logic";

// push notification does not support simulator/emulator.
// you should try it on physical device.

const LocalNotification = (props: PropsLocalNotification) => {
  let { navigation, route } = props;
  const hooks = useLocalNotification();

  return (
    <RootScreen rootStyle={{ paddingTop: 0 }}>
      <GoBackButton
        label="Local Notification"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.mainStyle}>
        <AppText label="Notification Data: " />
        {hooks.fields.receiveNotification && (
          <AppText
            label={
              hooks?.fields?.receiveNotification?.request?.content?.data?.data
            }
            lblStyle={{ opacity: 0.5 }}
          />
        )}

        <AppButton
          label="Toggle notification"
          btnStyle={styles.toggleStyle}
          onPress={hooks.handleToggleNotification}
        />
      </View>
    </RootScreen>
  );
};

export default LocalNotification;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    padding: 20,
  },
  toggleStyle: {
    marginTop: 15,
    alignItems: "center",
  },
});
