import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

export default class CacheData {
  async storeData(value: any, storageKey: string) {
    let item = { value, timestamp: Date.now() };

    try {
      await AsyncStorage.setItem(storageKey, JSON.stringify(item))
        .then((response) => {
          // console.log(response);
          // console.log("cache data successfully.");
        })
        .catch((error) => {
          // console.log({ error });
        });
    } catch (error) {
      console.log({ error });
    }
  }

  async retrieveAndRemoveData(storageKey: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey);
      const item: any = JSON.stringify(jsonValue);

      if (!item) return null;

      if (this.isExpired(item)) {
        this.removeDate("users");
        return null;
      }

      return item?.value;
    } catch (error) {
      console.log(error);
    }
  }

  isExpired(item: any) {
    const now = moment(Date.now());
    const storedTime = moment(item?.timestamp);
    return now.diff(storedTime, "minute") > 5;
  }

  async removeDate(storageKey: string) {
    try {
      await AsyncStorage.removeItem(storageKey, (response) => {
        // console.log(response)
        // console.log("cache data removed");
      }).catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
