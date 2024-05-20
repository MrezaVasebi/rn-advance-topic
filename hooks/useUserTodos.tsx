import { useInfiniteQuery } from "@tanstack/react-query";
import qrKeys from "constant/qrKeys";
import { useCallback } from "react";
import { UserTodo } from "types";
import { useApiService } from "./useApiService";

export const useUserTodos = () => {
  const { fetchData } = useApiService<UserTodo>();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: [qrKeys.todos],
      queryFn: async ({ pageParam, queryKey }) => {
        return fetchData(`todos?_page=${pageParam}`);
      },
      select: useCallback((data) => {
        return data.pages.flatMap((el) => el);
      }, []),
      // select: (data) => {
      //   // console.log(data.pageParams);
      //   return data.pages.flatMap((el) => el);
      // },
      getNextPageParam: function (
        lastPage,
        allPages,
        lastPageParams,
        allPageParams
      ) {
        if (lastPage.length !== 0) return lastPageParams + 1;
        else return null;
        // return lastPage["_page"] + 1;
      },
      // getPreviousPageParam: function (
      //   firstPage,
      //   allPages,
      //   firstPageParams,
      //   allPageParams
      // ) {

      // in this function pages are in a reversed state
      // because of that we decrease from first index of the pageParams array.

      //   return firstPageParams - 1;
      // },
    });

  return { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage };
};
