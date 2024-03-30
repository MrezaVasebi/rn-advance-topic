import { AppButton, GoBackButton, LoadingButton } from "@/buttons";
import RootScreen from "@/RootScreen";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { PropsNotification } from "screens/nav/FinalNavigation";

import { AppText } from "@/texts";
import { useNotification } from "./logic";

import { colors } from "@/colors";
import * as Device from "expo-device";

// push notification does not support simulator/emulator.
// you should try it on physical device.

const Notification = (props: PropsNotification) => {
  let { navigation, route } = props;
  const hooks = useNotification();

  if (!Device.isDevice) {
    return (
      <View style={styles.realDeviceStyle}>
        <AppText
          lblStyle={{ opacity: 0.5 }}
          label="For testing this section you must use real/physical device."
        />

        <AppButton label="Return" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  return (
    <RootScreen rootStyle={{ paddingTop: 0 }}>
      {!hooks.fields.loadToken ? (
        <>
          <GoBackButton
            label="Notification"
            onPress={() => navigation.goBack()}
          />

          <View style={styles.mainStyle}>
            {hooks.fields.receiveNotification && (
              <>
                <AppText label="Notification Data: " />
                <AppText
                  label={
                    hooks?.fields?.receiveNotification?.request?.content?.data
                      ?.data
                  }
                  lblStyle={{ opacity: 0.5 }}
                />
              </>
            )}

            <LoadingButton
              label="Toggle notification"
              btnStyle={styles.toggleStyle}
              loading={hooks.fields.loadingLocal}
              onPress={hooks.handleToggleNotification}
            />

            <LoadingButton
              loadingColor={colors.purple}
              loading={hooks.fields.loadingServer}
              label="Send notification by expo server"
              onPress={hooks.sendNotificationByExpoServer}
              btnStyle={{ alignItems: "center", marginTop: 15 }}
            />
          </View>
        </>
      ) : (
        <View style={styles.realDeviceStyle}>
          <ActivityIndicator size={"large"} color={colors.purple} />
        </View>
      )}
    </RootScreen>
  );
};

export default Notification;

const styles = StyleSheet.create({
  realDeviceStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainStyle: {
    flex: 1,
    padding: 20,
  },
  toggleStyle: {
    marginTop: 15,
    alignItems: "center",
  },
});
