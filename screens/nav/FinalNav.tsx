import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { CustomHeader } from "../../components";
import Main from "../Main";
import Animation from "../animation/Animation";

const Stack = createNativeStackNavigator();

function FinalNav() {
  return (
    // <RootScreen>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={
          {
            // headerTintColor: "#fff",
            // headerStyle: { backgroundColor: "green" , },
            // headerTitleStyle: { fontFamily: "medium", fontSize: 25 },
          }
        }
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Animation"
          component={Animation}
          options={{
            headerShown: true,
            // title: "Animation",
            // headerTintColor: "brown",
            // headerTitleAlign: "center",
            // headerStyle: { backgroundColor: "green" },
            // headerTitleStyle: { fontWeight: "bold" },

            // headerTitle: () => (
            //   <AppText
            //     label="Animation"
            //     lblStyle={{ color: "black", fontSize: 20 }}
            //   />
            // ),

            // headerBackground: () => (
            //   <View style={{ height: 45, backgroundColor: "red",}}>
            //     <AppText label="Hi" />
            //   </View>
            // ),

            // headerLeft: () => (
            //   <View style={{ marginRight: 10 }}>
            //     <AppText label="Left" />
            //   </View>
            // ),

            // headerRight: () => (
            //   <View>
            //     <AppText label="Right" />
            //   </View>
            // ),

            header: ({ navigation, options, route, back }) => (
              <CustomHeader
                back={back}
                route={route}
                options={options}
                navigation={navigation}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // </RootScreen>
  );
}

export default FinalNav;
