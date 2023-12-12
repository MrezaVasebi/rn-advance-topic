import { useFonts } from "expo-font";
import { FinalNav } from "./screens";

export default function App() {
  const [fontsLoaded] = useFonts({
    medium: require("./assets/fonts/Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <FinalNav />;
}
