import AppLoading from "@/AppLoading";
import { AppButton, GoBackButton } from "@/buttons";
import { TodoCart } from "@/carts";
import { colors } from "@/colors";
import { PropsUsersTodos } from "@/nav/FinalNavigation";
import RootScreen from "@/RootScreen";
import { AppText } from "@/texts";
import { useUserTodos } from "@/useUserTodos";
import React, { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const UsersTodos = (props: PropsUsersTodos) => {
  const flatRef = useRef<FlatList>(null);

  const {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    hasPreviousPage,
    isFetchingPreviousPage,
    fetchPreviousPage,
  } = useUserTodos();

  return (
    <RootScreen>
      <View style={{ paddingBottom: 10 }}>
        <GoBackButton
          label="Users Todos"
          onPress={() => props.navigation.goBack()}
        />
      </View>

      {isLoading ? (
        <AppLoading />
      ) : isFetchingNextPage ? (
        <View style={styles.fetchingContainer}>
          <AppText
            label="Fetching next data..."
            lblStyle={{ color: colors.purple }}
          />
        </View>
      ) : isFetchingPreviousPage ? (
        <View style={styles.fetchingContainer}>
          <AppText
            label="Fetching previous data..."
            lblStyle={{ color: colors.purple }}
          />
        </View>
      ) : (
        <FlatList
          data={data}
          ref={flatRef}
          onContentSizeChange={() =>
            flatRef.current.scrollToEnd({ animated: true })
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollStyle}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <TodoCart data={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          onLayout={() => flatRef.current.scrollToEnd({ animated: true })}
        />
      )}

      {/* <ScrollView
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
      </ScrollView> */}

      <View style={styles.nextBtnStyle}>
        {!isFetchingPreviousPage && (
          <AppButton
            label="Previous"
            btnStyle={styles.btnStyle}
            lblStyle={{ color: colors.white }}
            onPress={() => fetchPreviousPage()}
          />
        )}

        {hasNextPage && !isFetchingNextPage && (
          <AppButton
            label="Next"
            onPress={() => fetchNextPage()}
            lblStyle={{ color: colors.white }}
            btnStyle={{ ...styles.btnStyle, marginLeft: 5 }}
          />
        )}
      </View>
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
    left: 0,
    right: 0,
    bottom: 20,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  btnStyle: {
    backgroundColor: colors.purple,
  },
});
