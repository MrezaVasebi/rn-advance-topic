import { useInfiniteQuery } from "@tanstack/react-query";
import qrKeys from "constant/qrKeys";
import { useCallback } from "react";
import { UserTodo } from "types";
import { useApiService } from "./useApiService";

export const useUserTodos = () => {
  const { fetchData } = useApiService<UserTodo>();

  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    fetchPreviousPage,
    hasPreviousPage,
    isFetchingPreviousPage,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [qrKeys.todos],
    queryFn: async ({ pageParam, queryKey }) => {
      return fetchData(`${queryKey[0]}?_page=${pageParam}`);
    },
    // select: (data) => {
    //   // console.log(data.pageParams);
    //   return data.pages.flatMap((el) => el);
    // },
    select: useCallback((data) => {
      return data.pages.flatMap((el) => el) as UserTodo[];
    }, []),
    maxPages: 2,
    getNextPageParam: function (
      lastPage: UserTodo[],
      allPages: UserTodo[][],
      lastPageParams: number,
      allPageParams: number[]
    ) {
      if (lastPage.length !== 0) return lastPageParams + 1;
      else return null;
      // return lastPage["_page"] + 1;
    },
    getPreviousPageParam: (
      firstPage: UserTodo[],
      allPages: UserTodo[][],
      firstPageParams: number,
      allPageParams: number[]
    ) => {
      if (firstPageParams > 1) {
        return firstPageParams - 1;
      }
    },
  });

  return {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    hasPreviousPage,
    fetchPreviousPage,
    isFetchingPreviousPage,
  };
};
