import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { StyleSheet } from "react-native";
import { RootScreen } from "../../components";
import { AppText } from "../../components/texts";
import { colors } from "../../ui-config";
import Main from "../Main";
import { FormikApp } from "../formik";
import { KindOfNavigation } from "../kind_of_navigation";

// type RootStackParamList = {
//   Main: undefined;
//   Firebase: undefined;
//   UsersList: undefined;
//   UserDetails: {
//     user: object;
//   };
// };

// export type PropsUserDetails = NativeStackScreenProps<
//   RootStackParamList,
//   "UserDetails"
// >;

// export type PropsUsersList = NativeStackScreenProps<
//   RootStackParamList,
//   "UsersList"
// >;

// const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStack = createNativeStackNavigator();

function FinalNav() {
  return (
    <RootScreen>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Main"
          screenOptions={
            {
              // headerTintColor: "#fff",
              // headerStyle: { backgroundColor: "green" , },
              // headerTitleStyle: { fontFamily: "medium", fontSize: 25 },
            }
          }
        >
          <RootStack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />

          {/* <RootStack.Screen
            name="Firebase"
            component={Firebase}
            options={{
              headerShown: true,
              title: "Animation",
              headerTintColor: "brown",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: "green" },
              headerTitleStyle: { fontWeight: "bold" },

              headerTitle: () => (
                <AppText
                  label="Animation"
                  lblStyle={{ color: "black", fontSize: 20 }}
                />
              ),

              headerBackground: () => (
                <View style={{ height: 45, backgroundColor: "red",}}>
                  <AppText label="Hi" />
                </View>
              ),

              headerLeft: () => (
                <View style={{ marginRight: 10 }}>
                  <AppText label="Left" />
                </View>
              ),

              headerRight: () => (
                <View>
                  <AppText label="Right" />
                </View>
              ),

              header: ({ navigation, options, route, back }) => (
                <CustomHeader
                  back={back}
                  route={route}
                  options={options}
                  navigation={navigation}
                  onPressRightButton={() => {}}
                />
              ),
            }}
          /> */}

          {/* <RootStack.Screen
            name="UsersList"
            component={UsersList}
            options={{
              headerShown: true,
              header: ({ navigation, options, route, back }) => (
                <CustomHeader
                  back={back}
                  route={route}
                  options={options}
                  navigation={navigation}
                  onPressRightButton={() => {}}
                />
              ),
            }}
          /> */}

          {/* <RootStack.Screen
            name="UserDetails"
            component={UserDetails}
            initialParams={{ user: {} }}
            options={({ navigation, route }) => ({
              headerShown: true,
              headerTitle: ({ children, tintColor }) => (
                <AppText label={route.name} lblStyle={{ marginLeft: 10 }} />
              ),

              headerLeft({ canGoBack, label, tintColor }) {
                return null;
              },

              headerRight({ canGoBack, tintColor }) {
                return (
                  <TouchableOpacity>
                    <AppText label="Right" />
                  </TouchableOpacity>
                );
              },

              header({ navigation, options, route, back }) {
                return (
                  <CustomHeader
                    back={back}
                    route={route}
                    options={options}
                    rightLabel="Right"
                    navigation={navigation}
                    onPressRightButton={() => {}}
                  />
                );
              },
            })}
          />  */}

          <RootStack.Screen
            name="KindOfNavigation"
            component={KindOfNavigation}
            options={{ headerShown: false }}
          />

          <RootStack.Screen
            name="FormikApp"
            component={FormikApp}
            options={({ navigation, route }) => ({
              headerShown: false,
              headerTitle({ children, tintColor }) {
                return (
                  <AppText label={route.name} lblStyle={styles.formikTitle} />
                );
              },
            })}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </RootScreen>
  );
}

export default FinalNav;

const styles = StyleSheet.create({
  formikTitle: {
    fontSize: 20,
    color: colors.purple,
  },
});
