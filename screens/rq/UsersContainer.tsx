import AppLoading from "@/AppLoading";
import { CheckBox, GoBackButton } from "@/buttons";
import { UserCart } from "@/carts";
import RootScreen from "@/RootScreen";
import { useUsersContainer } from "@/useUsersContainer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";

const UsersContainer = () => {
  const navigation = useNavigation();
  const { isLoading, data, handleEnableData, enableData } = useUsersContainer();

  return (
    <RootScreen>
      <GoBackButton label="Users List" onPress={() => navigation.goBack()} />

      <View style={{ padding: 10, paddingTop: 15 }}>
        <CheckBox
          label="Enable Data"
          isChecked={enableData}
          onPress={handleEnableData}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ padding: 15, flex: 1 }}>
          {isLoading ? (
            <AppLoading />
          ) : (
            enableData &&
            data.map((el, index) => (
              <UserCart item={el} key={index} style={{ marginBottom: 5 }} />
            ))
          )}
        </View>
      </ScrollView>
    </RootScreen>
  );
};

export default UsersContainer;
