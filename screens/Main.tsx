import { colors } from "@/colors";
import MenuItem from "@/MenuItem";
import RootScreen from "@/RootScreen";
import { AppText } from "@/texts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ThemeContext } from "context";
import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Main = () => {
  let routes: { routeName: string; lbl: string }[] = [
    { routeName: "KindOfNavigation", lbl: "Kind Of Navigation" },
    { routeName: "FormikApp", lbl: "Formik App" },
    { routeName: "Notification", lbl: "Expo Notification" },
    { routeName: "CachingData", lbl: "Caching Data" },
    { routeName: "UsersContainer", lbl: "Users List" },
  ];

  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <RootScreen bgColor={theme === "light" ? colors.bgColor : colors.darkBlue}>
      <View style={styles.titleStyle}>
        <AppText
          lblStyle={{
            ...styles.lblTitle,
            color: theme === "light" ? colors.purple : colors.white,
          }}
          label="React Native Advance"
        />

        <TouchableOpacity
          onPress={() => toggleTheme(theme === "light" ? "dark" : "light")}
        >
          <MaterialCommunityIcons
            size={24}
            name="theme-light-dark"
            color={theme === "light" ? colors.black : colors.white}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContainer}>
        {routes.map((el, index) => {
          return (
            <MenuItem
              key={index}
              label={el.lbl}
              rootStyle={{ marginBottom: 15 }}
              onPress={() => navigate(el.routeName)}
            />
          );
        })}
      </View>
    </RootScreen>
  );
};

export default Main;

const styles = StyleSheet.create({
  titleStyle: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  lblTitle: {
    fontSize: 20,
    color: colors.purple,
  },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
});
