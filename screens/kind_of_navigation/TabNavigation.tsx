import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AppButton } from "../../components/buttons";
import { colors } from "../../ui-config";
import { TabView } from "./components";

const Tab = createBottomTabNavigator();

const TabA = ({ navigation }: { navigation: any }) => {
  return (
    <TabView
      title="TabA"
      label="Go to TabB"
      onPress={() => navigation.navigate("TabB")}
    />
  );
};

const TabB = ({ navigation }: { navigation: any }) => {
  return (
    <TabView
      title="TabB"
      label="Go to TabC"
      onPress={() => navigation.navigate("TabC")}
    />
  );
};

const TabC = ({ navigation }: { navigation: any }) => {
  return (
    <TabView
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

        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.darkBlue,

        tabBarIcon({ color, focused, size }) {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "TabA") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "TabB") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "TabC") {
            iconName = focused ? "search" : "search";
          }

          return <Ionicons name={iconName!} size={size} color={color} />;
        },

        tabBarBadge: "2",
        tabBarBadgeStyle: {
          fontSize: 13,
          fontFamily: "medium",
          color: colors.white,
          backgroundColor: colors.green,
        },

        tabBarHideOnKeyboard: true,

        // tabBarLabel({ children, color, focused, position }) {
        //   return <AppText label={route.name} />;
        // },

        tabBarLabelPosition: "beside-icon",

        tabBarStyle: styles.tabBarStyle,

        // tabBarIconStyle: {
        //   width: 50,
        //   height: 50,
        // },

        tabBarShowLabel: false,
      })}
      tabBar={({ descriptors, insets, navigation, state }) => {
        // console.log({ insets });
        // console.log({ descriptors });
        // console.log({ navigation });
        // console.log(JSON.stringify(state, null, 2));

        return (
          <View style={styles.rootTabStyle}>
            {state?.routeNames.map((el, index) => {
              return (
                <AppButton
                  onPress={() => {
                    if (el === "TabA") {
                      navigation.navigate("TabA");
                    } else if (el === "TabB") {
                      navigation.navigate("TabB");
                    } else if (el === "TabC") {
                      navigation.navigate("TabC");
                    }
                  }}
                  label={el}
                  btnStyle={{
                    borderWidth: 0,
                  }}
                  lblStyle={{
                    fontSize: index === state.index ? 15 : 12,
                    color: index === state.index ? colors.black : colors.green,
                  }}
                />
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen name="TabA" component={TabA} />
      <Tab.Screen name="TabB" component={TabB} />
      <Tab.Screen name="TabC" component={TabC} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  rootTabStyle: {
    left: 20,
    right: 20,
    bottom: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    flexDirection: "row",
    paddingHorizontal: 20,
    borderColor: colors.purple,
    backgroundColor: colors.white,
    justifyContent: "space-between",
  },
  tabStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
