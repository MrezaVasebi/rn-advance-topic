import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "context";
import React, { ReactNode } from "react";

interface IQueryProvider {
  client?: QueryClient;
  children?: ReactNode;
}

const QueryProvider = ({ client, children }: IQueryProvider) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        // The time in milliseconds that unused/inactive cache data remains in memory. When a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different garbage collection times are specified, the longest one will be used.
        gcTime: 5000,
        // The time in milliseconds after data is considered stale. This value only applies to the hook it is defined on.
        // If set to Infinity, the data will never be considered stale
        staleTime: 3000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default QueryProvider;
