import { AppButton } from "@/buttons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { CustomTabNavigation, MainView } from "./components";
import { colors } from "@/colors";

const Tab = createBottomTabNavigator();

const TabA = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.rootStyle}>
      <MainView
        title="TabA"
        label="Go to TabB"
        rootStyle={{ flex: 0 }}
        onPress={() => navigation.navigate("TabB")}
      />

      <AppButton
        label="Open Drawer"
        onPress={() => navigation.openDrawer()}
        btnStyle={{ marginTop: 10 }}
      />

      <AppButton
        label="Go to Stack Navigation"
        onPress={() => navigation.navigate("StackNavigation")}
        btnStyle={{ marginTop: 10 }}
      />
    </View>
  );
};

const TabB = ({ navigation }: { navigation: any }) => {
  return (
    <MainView
      title="TabB"
      label="Go to TabC"
      onPress={() => navigation.navigate("TabC")}
    />
  );
};

const TabC = ({ navigation }: { navigation: any }) => {
  return (
    <MainView
      title="TabC"
      label="Go to TabA"
      onPress={() => navigation.navigate("TabA")}
    />
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        headerShown: false,

        // tabBarActiveTintColor: colors.purple,
        // tabBarInactiveTintColor: colors.darkBlue,

        // tabBarIcon({ color, focused, size }) {
        //   let iconName: keyof typeof Ionicons.glyphMap;

        //   if (route.name === "TabA") {
        //     iconName = focused
        //       ? "ios-information-circle"
        //       : "ios-information-circle-outline";
        //   } else if (route.name === "TabB") {
        //     iconName = focused ? "ios-list" : "ios-list-outline";
        //   } else if (route.name === "TabC") {
        //     iconName = focused ? "search" : "search";
        //   }

        //   return <Ionicons name={iconName!} size={size} color={color} />;
        // },

        // tabBarBadge: "2",

        // tabBarBadgeStyle: {
        //   fontSize: 13,
        //   fontFamily: "medium",
        //   color: colors.white,
        //   backgroundColor: colors.green,
        // },

        // tabBarHideOnKeyboard: true,

        // tabBarLabel({ children, color, focused, position }) {
        //   return <AppText label={route.name} />;
        // },

        // tabBarLabelPosition: "beside-icon",

        // tabBarStyle: styles.tabBarStyle,

        // tabBarIconStyle: {
        //   width: 50,
        //   height: 50,
        // },

        // tabBarShowLabel: false,
      })}
      tabBar={({ descriptors, insets, navigation, state }) => {
        return (
          <CustomTabNavigation
            state={state}
            insets={insets}
            navigation={navigation}
            descriptors={descriptors}
          />
        );
      }}

      // backBehavior="initialRoute"
      // initialRouteName="TabA"
    >
      <Tab.Screen name="TabA" component={TabA} />
      <Tab.Screen name="TabB" component={TabB} />
      <Tab.Screen name="TabC" component={TabC} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bgColor,
  },
  tabBarStyle: {
    left: 20,
    right: 20,
    bottom: 10,
    height: 65,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: colors.bgColor,
  },
});
