import { useFonts } from "expo-font";
import { FinalNavigation } from "screens/nav";

export default function App() {
  const [fontsLoaded] = useFonts({
    medium: require("./assets/fonts/Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <FinalNavigation />;
}
