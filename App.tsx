import { useFonts } from "expo-font";
import { FinalNavigation } from "screens/nav";
import { QueryProvider } from "./components";

export default function App() {
  // const client = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       // retry: 5,
  //       // retryDelay: 2,
  //       // gcTime: 10000,
  //       staleTime: 3000,
  //       // refetchInterval: 3000,
  //     },
  //   },
  // });

  const [fontsLoaded] = useFonts({
    medium: require("./assets/fonts/Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryProvider>
      <FinalNavigation />
    </QueryProvider>
  );
}
