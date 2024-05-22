import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import qrKeys from "constant/qrKeys";
import { useState } from "react";
import { User } from "types";
import { useApiService } from "./useApiService";

export const useUsersContainer = () => {
  const { fetchData, sendData } = useApiService<User>();
  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [enableData, setEnableData] = useState<boolean>(false);

  const { isLoading, data, isError, error, refetch } = useQuery({
    enabled: enableData,
    placeholderData: keepPreviousData,
    queryKey: [qrKeys.users, enableData],
    queryFn: async ({ queryKey }) => {
      return fetchData(queryKey[0] as string);
      // return fetchData(`users?_page=${queryKey[2]}&_limit=1`);
    },
    // queryKey: ["users", enableData, page],
    // select --> returned of queryFn response.
    select: (data: User[]) => {
      if (data && data.length !== 0) return data;
      else return [];
    },
  });

  const handleEnableData = () => setEnableData(!enableData);

  const createNewUser = useMutation({
    mutationFn: async () => {
      const option: RequestInit = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      };
      return await sendData("", option);
    },
    onSuccess(data, variables, context) {
      console.log({ data });
      queryClient.invalidateQueries({ queryKey: [qrKeys.users] });
    },
  });

  // function handlePage(identifier: "inc" | "dec") {
  //   if (identifier === "dec" && page === 1) return;
  //   setPage((pre) => (identifier === "inc" ? pre + 1 : pre - 1));
  // }

  return {
    refetch,
    handleEnableData,
    enableData,
    isLoading,
    data,
    isError,
    error,
  };
};
