import { useApiService } from "@/useApiService";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

export const useCachingData = () => {
  let { data, loading, error, fetchDataHandler, handleCacheData } =
    useApiService();

  const [isConnected, setIsConnected] = useState<"checking" | "true" | "false">(
    "checking"
  );

  useEffect(() => {
    const unSubscribe = NetInfo.addEventListener((status: NetInfoState) => {
      let connection: "checking" | "false" | "true" = "checking";
      if (status.isConnected === null) connection = "checking";
      else if (status.isConnected) connection = "true";
      else connection = "false";

      setIsConnected(connection);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  useEffect(() => {
    if (isConnected === "true") {
      fetchDataHandler("users", "users");
    } else if (isConnected === "false") {
      handleCacheData("users");
    }
  }, [isConnected]);

  const fields = {
    data,
    error,
    loading,
    isConnected,
  };

  return {
    fields,
  };
};
