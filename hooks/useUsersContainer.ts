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

  const { isLoading, data, isError, error, refetch, isFetching, fetchStatus } =
    useQuery({
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
      // when the page is mounted or focused, fetch function fired automatically.
      // refetchOnMount: true,

      // refetchOnWindowFocus: "always",

      // refetch the function in that intervale(2000 millisecond) automatically
      // refetchInterval: 2000,

      // it causes refetch data when the page even is not mount. it dows it automatically in background.
      // refetchIntervalInBackground: true,

      // staleTime: 5 * 6 * 1000, // data will be staled after 1 min
      // gcTime: 1 * 6 * 1000, // cache data for 5 min
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
      // updated data with special queryKey
      queryClient.invalidateQueries({ queryKey: [qrKeys.users] });

      // add new data
      queryClient.setQueryData([qrKeys.users], data);
    },
    onError(error, variables, context) {
      throw new Error("Error in creating user...");
    },
  });

  // function handlePage(identifier: "inc" | "dec") {
  //   if (identifier === "dec" && page === 1) return;
  //   setPage((pre) => (identifier === "inc" ? pre + 1 : pre - 1));
  // }

  return {
    fetchStatus,
    isFetching,
    refetch,
    handleEnableData,
    enableData,
    isLoading,
    data,
    isError,
    error,
  };
};
