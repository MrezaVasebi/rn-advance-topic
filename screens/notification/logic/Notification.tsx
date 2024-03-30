import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import { useEffect, useState } from "react";
import { Platform } from "react-native";

// handle the notification when application is in foreground.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const useNotification = () => {
  let projectId = "b3274457-7eb6-42b2-bd91-4d5a6e1727a9";

  const [receiveNotification, setReceiveNotification] =
    useState<Notifications.Notification>(null);

  const [responseNotification, setResponseNotification] =
    useState<Notifications.NotificationResponse>(null);

  const [expoPushToken, setExpoPushToken] = useState<string>("");

  const [loadToken, setLoadToken] = useState<boolean>(false);
  const [loadingLocal, setLoadingLocal] = useState<boolean>(false);
  const [loadingServer, setLoadingServer] = useState<boolean>(false);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // when the application is in foreground.
    const receiveNotification = Notifications.addNotificationReceivedListener(
      (response: Notifications.Notification) => {
        setReceiveNotification(response);
        // console.log(JSON.stringify(response, null, 2));
      }
    );

    // invoke when user acts with notifications message when the app is running in background.
    const responseReceivedNotification =
      Notifications.addNotificationResponseReceivedListener(
        (response: Notifications.NotificationResponse) => {
          setResponseNotification(response);
          // console.log(JSON.stringify(response, null, 2));

          // you can do everything that you want. for example navigate to
          // special page or other things.
        }
      );

    return () => {
      receiveNotification.remove();
      responseReceivedNotification.remove();
    };
  }, []);

  // handle notification when the application is in background.
  const handleToggleNotification = async () => {
    try {
      setLoadingLocal(true);
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
    } catch (error) {
      console.log({ error });
    } finally {
      setLoadingLocal(false);
    }
  };

  async function registerForPushNotificationsAsync() {
    let token = null;

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      setLoadToken(true);
      try {
        let { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }

        if (finalStatus !== "granted") {
          console.log("Failed to get push token for push notification!");
          return;
        }

        token = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        // console.log({ token });
      } catch (error) {
        console.log({ error });
      } finally {
        setLoadToken(false);
      }
    } else {
      console.log("Must use physical device for Push Notifications");
    }

    return token;
  }

  async function sendNotificationByExpoServer() {
    setLoadingServer(true);
    try {
      await fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "gzip, deflate",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: expoPushToken,
          data: { extraData: "Some data" },
          title: "sent via the app",
          body: "This push notification was sent via the app!",
        }),
      });
    } catch (error) {
      console.log({ error });
    } finally {
      setLoadingServer(false);
    }
  }

  const fields = {
    loadToken,
    loadingServer,
    loadingLocal,
    receiveNotification,
    responseNotification,
  };

  return {
    sendNotificationByExpoServer,
    fields,
    handleToggleNotification,
  };
};
