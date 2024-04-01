import ApiService from "@/ApiService";
import { useState } from "react";

export const useApiService = () => {
  const apiService = new ApiService();

  const [data, setData] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getDataHandler = async (endPoint: string) => {
    setLoading(true);

    try {
      let response = await apiService.getData(endPoint);
      if (response) {
        setData(response);
        setLoading(false);
      } else {
        setLoading(false);
        setError("Something is wrong...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { data, loading, error, getDataHandler };
};
