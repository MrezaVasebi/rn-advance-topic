import { useFonts } from "expo-font";
import { StatusBar, View } from "react-native";
import { FinalNavigation } from "screens/nav";

export default function App() {
  const [fontsLoaded] = useFonts({
    medium: require("./assets/fonts/Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />

      <FinalNavigation />
    </View>
  );
}
