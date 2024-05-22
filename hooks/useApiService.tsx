import ApiService from "@/ApiService";
import CacheData from "@/CacheData";
import { useState } from "react";

export const useApiService = <D,>() => {
  const cache = new CacheData();
  const apiService = new ApiService();

  const [data, setData] = useState<D[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (endPoint: string): Promise<D[]> => {
    try {
      let res = await apiService.getData<D>(endPoint);
      return res;
    } catch (error) {
      throw new Error("Error in fetching data...");
    }
  };

  const sendData = async (endPoint: string, option: RequestInit) => {
    try {
      let response = await apiService.postData(endPoint, option);
      return response;
    } catch (error) {
      throw new Error("Error in sending data...");
    }
  };

  const onFetchAndStoreDataInStorage = async (
    endPoint: string,
    storageKey: string
  ) => {
    if (endPoint === "" || storageKey === "") return;

    setLoading(true);
    try {
      let response = await fetchData(endPoint);
      if (response.length !== 0) {
        setData(response);

        // cache data in async storage
        cache.storeData(response, storageKey);
      } else {
        setError("Something is wrong...");
      }
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCacheData = async (storageKey: string) => {
    if (storageKey === "") return;

    setLoading(true);
    try {
      let response = await cache.retrieveAndRemoveData(storageKey);
      if (response) {
        setData(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    sendData,
    fetchData,
    data,
    loading,
    error,
    onFetchAndStoreDataInStorage,
    handleCacheData,
  };
};
