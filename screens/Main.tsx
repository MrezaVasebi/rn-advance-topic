import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MenuItem, RootScreen } from "../components";
import { AppText } from "../components/texts";

const Main = () => {
  let routes = [{ routeName: "Animation", lbl: "Animation" }];
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <RootScreen>
      <View style={styles.titleStyle}>
        <AppText
          lblStyle={styles.lblTitle}
          label="React Native Advance Courses"
        />
      </View>

      <View style={styles.mainContainer}>
        {routes.map((el, index) => {
          return (
            <MenuItem
              key={index}
              label={el.lbl}
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
  lblTitle: { fontSize: 20, color: "purple" },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
});
