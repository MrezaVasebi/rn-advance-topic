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
