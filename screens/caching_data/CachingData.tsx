import AppLoading from "@/AppLoading";
import { GoBackButton } from "@/buttons";
import RootScreen from "@/RootScreen";
import { AppText } from "@/texts";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { PropsCachingData } from "screens/nav/FinalNavigation";
import { UserCart } from "./components";
import { useCachingData } from "./logic";

const CachingData = (props: PropsCachingData) => {
  const hooks = useCachingData();
  let { navigation, route } = props;

  return (
    <RootScreen>
      <GoBackButton label="Caching Data" onPress={() => navigation.goBack()} />

      <View style={styles.container}>
        {hooks.loading ? (
          <AppLoading />
        ) : hooks.error ? (
          <View style={styles.noData}>
            <AppText label={hooks.error} />
          </View>
        ) : (
          <FlatList
            data={hooks.data}
            contentContainerStyle={{ padding: 10 }}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            renderItem={({ item }) => {
              return <UserCart item={item} />;
            }}
          />
        )}
      </View>
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
});
