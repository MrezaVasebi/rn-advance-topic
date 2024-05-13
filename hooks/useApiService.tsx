import ApiService from "@/ApiService";
import CacheData from "@/CacheData";
import { useState } from "react";

export const useApiService = <D,>() => {
  const cache = new CacheData();
  const apiService = new ApiService();

  const [data, setData] = useState<D[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDataHandler = async (endPoint: string, storageKey: string) => {
    if (endPoint === "" || storageKey === "") return;

    setLoading(true);
    try {
      let response = await apiService.getData<D>(endPoint);
      if (response) {
        setData(response);

        // cache data in async storage
        cache.storeData(response, storageKey);
      } else {
        setError("Something is wrong...");
      }
    } catch (error) {
      console.log(error);
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

  return { data, loading, error, fetchDataHandler, handleCacheData };
};
