import { colors } from "@/colors";
import { AppText } from "@/texts";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Modal,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { ICity } from "../interfaces";

interface ICityModal {
  cities: ICity[];
  closeModal: () => void;
  handleOnSelectCity: (item: ICity) => void;
}

const CityModal = (props: ICityModal) => {
  return (
    <Modal animationType="fade" transparent statusBarTranslucent>
      <View style={styles.rootStyle}>
        <View style={styles.mainStyle}>
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={props.closeModal}>
              <Ionicons name="close" size={25} />
            </TouchableOpacity>
          </View>

          <AppText
            label="Please select your city"
            lblStyle={{ fontSize: 25 }}
          />

          <FlatList
            data={props.cities}
            style={{ marginTop: 15 }}
            renderItem={({ item, index }: { item: ICity; index: number }) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.5}
                  style={styles.itemStyle}
                  onPress={() => props.handleOnSelectCity(item)}
                >
                  <View style={styles.circleStyle} />

                  <AppText label={item.lbl} lblStyle={styles.lblStyle} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CityModal;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    padding: StatusBar.currentHeight,
    backgroundColor: "rgba(0,0,0,.5)",
  },
  mainStyle: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  itemStyle: {
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  circleStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.purple,
  },
  lblStyle: {
    fontSize: 15,
    marginLeft: 8,
    color: colors.purple,
  },
});
