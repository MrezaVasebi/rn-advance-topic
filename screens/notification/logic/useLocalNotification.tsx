import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";

// handle the notification when application is in foreground.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const useLocalNotification = () => {
  const [receiveNotification, setReceiveNotification] =
    useState<Notifications.Notification>(null);

  useEffect(() => {
    let receiveNotification = Notifications.addNotificationReceivedListener(
      (response: Notifications.Notification) => {
        setReceiveNotification(response);
        // console.log(JSON.stringify(response, null, 2))
      }
    );

    return () => {
      receiveNotification.remove();
    };
  }, []);

  // handle notification when the application is in background.
  const handleToggleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        // badge: 1,
        // sound: true,
        // sticky: true,
        // vibrate: [1, 2],
        // autoDismiss: false,
        // color: colors.purple,
        body: "Body of notification",
        title: "Title of notification",
        subtitle: "Subtitle of notification",
        data: { data: "Data of notification." },
        priority: Notifications.AndroidNotificationPriority.DEFAULT,
      },
      trigger: {
        seconds: 5, // send notification after 5 seconds
      },
      // identifier: "Cancel sending notification...",
    });
  };

  const fields = {
    receiveNotification,
  };

  return {
    fields,
    handleToggleNotification,
  };
};
