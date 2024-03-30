import { AppButton, GoBackButton } from "@/buttons";
import RootScreen from "@/RootScreen";
import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { PropsLocalNotification } from "screens/nav/FinalNavigation";

import * as Notifications from "expo-notifications";

// handle the notification when application is in foreground.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const LocalNotification = (props: PropsLocalNotification) => {
  let { navigation, route } = props;

  const responseListener = useRef();
  const notificationListener = useRef();

  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);

  // local notification, device send notification to itself.
  // when the application is in background.
  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        // badge: 1,
        // sound: true,
        // sticky: true,
        // vibrate: [1, 2],
        // autoDismiss: false,
        // color: colors.purple,
        body: "Body",
        title: "Title",
        subtitle: "Subtitle",
        data: { data: "goes here" },
        priority: Notifications.AndroidNotificationPriority.DEFAULT,
      },
      trigger: {
        seconds: 5, // send notification after 5 seconds
      },
      // identifier: "Cancel sending notification...",
    });
  }

  return (
    <RootScreen rootStyle={{ paddingTop: 0 }}>
      <GoBackButton
        label="Local Notification"
        onPress={() => navigation.goBack()}
      />

      <View style={styles.mainStyle}>
        <AppButton
          label="Toggle notification"
          btnStyle={styles.toggleStyle}
          onPress={async () => {
            await schedulePushNotification();
          }}
        />
      </View>
    </RootScreen>
  );
};

export default LocalNotification;

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    paddingHorizontal: 20,
  },
  toggleStyle: {
    marginTop: 15,
    alignItems: "center",
  },
});
