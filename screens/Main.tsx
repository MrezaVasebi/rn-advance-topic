import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MenuItem, RootScreen } from "../components";
import { AppText } from "../components/texts";
import { colors } from "../ui-config";

const Main = () => {
  let routes: { routeName: string; lbl: string }[] = [
    { routeName: "KindOfNavigation", lbl: "Kind Of Navigation" },
    { routeName: "FormikApp", lbl: "Formik App" },
  ];
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <RootScreen>
      <View style={styles.titleStyle}>
        <AppText lblStyle={styles.lblTitle} label="React Native Advance" />
      </View>

      <View style={styles.mainContainer}>
        {routes.map((el, index) => {
          return (
            <MenuItem
              key={index}
              label={el.lbl}
              rootStyle={{ marginBottom: 15 }}
              onPress={() => navigation.navigate(el.routeName)}
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
    alignItems: "center",
    justifyContent: "center",
  },
  lblTitle: { fontSize: 20, color: colors.purple },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
});
