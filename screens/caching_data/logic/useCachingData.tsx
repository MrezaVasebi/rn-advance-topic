import { useApiService } from "@/useApiService";
import { useEffect } from "react";

export const useCachingData = () => {
  let { data, loading, error, getDataHandler } = useApiService();

  useEffect(() => {
    getDataHandler("users");
  }, []);

  return {
    data,
    error,
    loading,
  };
};
