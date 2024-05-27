import AppLoading from "@/AppLoading";
import { AppButton, CheckBox, GoBackButton } from "@/buttons";
import { UserCart } from "@/carts";
import { PropsUsersContainer } from "@/nav/FinalNavigation";
import RootScreen from "@/RootScreen";
import { AppText } from "@/texts";
import { useUsersContainer } from "@/useUsersContainer";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

const UsersContainer = (props: PropsUsersContainer) => {
  const {
    isLoading,
    data,
    handleEnableData,
    enableData,
    error,
    isError,
    refetch,
    isFetching,
    fetchStatus,
  } = useUsersContainer();

  // console.log(isLoading, isFetching, fetchStatus);

  /*
    fetchStatus === 'idle' -> not fetching data
    fetchStatus === 'fetching' -> fetching data
    fetchStatus === 'paused' -> cancel fetching data
  */

  return (
    <RootScreen>
      <GoBackButton
        label="Users List"
        onPress={() => props.navigation.goBack()}
      />

      <View style={styles.headerContainer}>
        <CheckBox
          label="Enable Data"
          isChecked={enableData}
          onPress={handleEnableData}
        />

        {enableData && (
          <AppButton
            onPress={() => props.navigation.navigate("UsersTodos")}
            label="Users Todos"
            btnStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        )}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ padding: 15, paddingTop: 5, flex: 1 }}>
          {isLoading || isFetching ? (
            <AppLoading />
          ) : isError ? (
            <View style={styles.errorContainer}>
              <AppText label={error.message} />
            </View>
          ) : (
            enableData &&
            data?.length !== 0 &&
            data.map((el, index) => (
              <UserCart item={el} key={index} style={{ marginBottom: 5 }} />
            ))
          )}
        </View>

        {/* <AppButton label="Press to fetch api" onPress={() => refetch()} /> */}

        {/* <Pagination onPress={(value) => {}} /> */}
      </ScrollView>
    </RootScreen>
  );
};

export default UsersContainer;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  errorContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
