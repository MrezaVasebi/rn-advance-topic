import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { User } from "types";

export const useUsersContainer = () => {
  const [enableData, setEnableData] = useState<boolean>(false);

  const fetchDataHandler = async () => {
    // `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=1`
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!response.ok) throw new Error("Failed in fetching data...");
    return (await response.json()) as User[];
  };

  const { isLoading, data } = useQuery({
    enabled: enableData,
    queryFn: fetchDataHandler,
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
