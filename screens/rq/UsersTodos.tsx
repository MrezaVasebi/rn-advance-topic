import AppLoading from "@/AppLoading";
import { AppButton, GoBackButton } from "@/buttons";
import { TodoCart } from "@/carts";
import { colors } from "@/colors";
import { PropsUsersTodos } from "@/nav/FinalNavigation";
import RootScreen from "@/RootScreen";
import { AppText } from "@/texts";
import { useUserTodos } from "@/useUserTodos";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

const UsersTodos = (props: PropsUsersTodos) => {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useUserTodos();

  return (
    <RootScreen>
      <View style={{ paddingBottom: 10 }}>
        <GoBackButton
          label="Users Todos"
          onPress={() => props.navigation.goBack()}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollStyle}
      >
        {isLoading ? (
          <AppLoading />
        ) : isFetchingNextPage ? (
          <View style={styles.fetchingContainer}>
            <AppText
              label="Data is fetching..."
              lblStyle={{ color: colors.purple }}
            />
          </View>
        ) : (
          data.map((el, index) => {
            return (
              <View
                key={index}
                style={{ marginBottom: index === data.length ? 0 : 10 }}
              >
                <TodoCart data={el} />
              </View>
            );
          })
        )}
      </ScrollView>

      {hasNextPage && !isFetchingNextPage && (
        <View
          style={{
            ...styles.nextBtnStyle,
            left: Dimensions.get("screen").width / 2.5,
          }}
        >
          <AppButton
            label="Next Page"
            btnStyle={styles.btnStyle}
            onPress={() => fetchNextPage()}
            lblStyle={{ color: colors.white }}
          />
        </View>
      )}
    </RootScreen>
  );
};

export default UsersTodos;

const styles = StyleSheet.create({
  fetchingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollStyle: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 10,
  },
  nextBtnStyle: {
    bottom: 20,
    position: "absolute",
  },
  btnStyle: {
    width: 100,
    backgroundColor: colors.purple,
  },
});
