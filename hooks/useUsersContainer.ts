import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { User } from "types";
import { useApiService } from "./useApiService";

export const useUsersContainer = () => {
  const { fetchData } = useApiService<User>();
  const [enableData, setEnableData] = useState<boolean>(false);

  const { isLoading, data } = useQuery({
    enabled: enableData,
    queryFn: async () => {
      return fetchData("users");
    },
    queryKey: ["users", enableData],
    placeholderData: keepPreviousData,
    // select --> returned of queryFn response.
    select: (data: User[]) => data,
  });

  function handleEnableData() {
    setEnableData(!enableData);
  }

  return {
    handleEnableData,
    enableData,
    isLoading,
    data,
  };
};
