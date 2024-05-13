import AppLoading from "@/AppLoading";
import { GoBackButton } from "@/buttons";
import { UserCart } from "@/carts";
import { colors } from "@/colors";
import RootScreen from "@/RootScreen";
import { AppText } from "@/texts";
import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { PropsCachingData } from "screens/nav/FinalNavigation";
import { useCachingData } from "./logic";

const CachingData = (props: PropsCachingData) => {
  let { navigation, route } = props;
  const { fields } = useCachingData();

  return (
    <RootScreen>
      <GoBackButton label="Caching Data" onPress={() => navigation.goBack()} />

      {fields.isConnected === "checking" ? (
        <View style={styles.checkConnection}>
          <AppText label="Checking internet connection. Please wait..." />

          <ActivityIndicator
            size={"small"}
            color={colors.purple}
            style={{ marginTop: 10 }}
          />
        </View>
      ) : (
        <View style={styles.container}>
          {fields.loading ? (
            <AppLoading />
          ) : fields.error ? (
            <View style={styles.noData}>
              <AppText label={fields.error} />
            </View>
          ) : (
            <>
              {fields.isConnected === "false" && (
                <View style={styles.noInternetStyle}>
                  <AppText
                    label="No internet connection..."
                    lblStyle={{ color: colors.white }}
                  />
                </View>
              )}

              <FlatList
                data={fields.data}
                contentContainerStyle={{
                  padding: 10,
                  paddingTop: fields.isConnected === "false" ? 55 : 10,
                }}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                renderItem={({ item }) => {
                  return <UserCart item={item} />;
                }}
              />
            </>
          )}
        </View>
      )}
    </RootScreen>
  );
};

export default CachingData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noData: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkConnection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noInternetStyle: {
    top: 10,
    left: 20,
    right: 20,
    padding: 5,
    borderRadius: 5,
    position: "absolute",
    backgroundColor: colors.red,
  },
});
