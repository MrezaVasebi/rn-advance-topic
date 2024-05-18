import { keepPreviousData, useQuery } from "@tanstack/react-query";
import qrKeys from "constant/qrKeys";
import { useState } from "react";
import { User } from "types";
import { useApiService } from "./useApiService";

export const useUsersContainer = () => {
  const { fetchData } = useApiService<User>();

  const [page, setPage] = useState(1);
  const [enableData, setEnableData] = useState<boolean>(false);

  const { isLoading, data } = useQuery({
    enabled: enableData,
    queryFn: async ({ queryKey }) => {
      return fetchData(`users`);
      // return fetchData(`users?_page=${queryKey[2]}&_limit=1`);
    },
    // queryKey: ["users", enableData, page],
    queryKey: [qrKeys.users, enableData],
    placeholderData: keepPreviousData,
    // select --> returned of queryFn response.
    select: (data: User[]) => data,
  });

  function handleEnableData() {
    setEnableData(!enableData);
  }

  // function handlePage(identifier: "inc" | "dec") {
  //   if (identifier === "dec" && page === 1) return;
  //   setPage((pre) => (identifier === "inc" ? pre + 1 : pre - 1));
  // }

  return {
    handleEnableData,
    enableData,
    isLoading,
    data,
  };
};
