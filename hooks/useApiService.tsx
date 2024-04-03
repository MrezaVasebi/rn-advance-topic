import ApiService from "@/ApiService";
import CacheData from "@/CacheData";
import { useState } from "react";

export const useApiService = () => {
  const cache = new CacheData();
  const apiService = new ApiService();

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDataHandler = async (endPoint: string, storageKey: string) => {
    try {
      setLoading(true);
      let response = await apiService.getData(endPoint);
      if (response) {
        setData(response);
        setLoading(false);

        // cache data in async storage
        cache.storeData(response, storageKey);
      } else {
        setLoading(false);
        setError("Something is wrong...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCacheData = async (storageKey: string) => {
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
