import React from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "../../../components/texts";
import { colors } from "../../../ui-config";

import {
  AppButton,
  CheckBox,
  LoadingButton,
} from "../../../components/buttons";
import { useAuth } from "../logic";
import InputField from "./InputField";

const Auth = () => {
  const hooks = useAuth();

  return (
    <View style={styles.rootStyle}>
      <InputField
        label="Email"
        value={hooks.state.email}
        placeholder="Enter Email"
        setValue={(value: string) => hooks.setInfo("email", value)}
      />

      <InputField
        label="Password"
        secureTextEntry={true}
        value={hooks.state.pass}
        placeholder="Enter Password"
        setValue={(value: string) => hooks.setInfo("pass", value)}
      />

      <CheckBox
        label="Have an account?"
        btnStyle={{ marginTop: 15 }}
        onPress={hooks.handleIsChecked}
        isChecked={hooks.state.isChecked}
      />

      {hooks.state.errMsg.length !== 0 && (
        <View
          style={{
            ...styles.errContainer,
            backgroundColor:
              hooks.state.errStatus === "error" ? colors.red : colors.green,
          }}
        >
          <AppText
            label={hooks.state.errMsg}
            lblStyle={{ color: colors.white, fontSize: 15 }}
          />
        </View>
      )}

      <View style={styles.btnContainer}>
        <LoadingButton
          btnStyle={styles.btnStyle}
          loading={hooks.state.loading}
          onPress={hooks.handleOnPress}
          disabled={hooks.state.loading}
          label={!hooks.state.isChecked ? "SignUp" : "Login"}
        />

        <AppButton
          label="Cancel"
          lblStyle={{ color: colors.red }}
          onPress={hooks.handleResetValue}
          btnStyle={{ ...styles.btnStyle, marginLeft: 10 }}
        />
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
  },
  btnContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  btnStyle: {
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  errContainer: {
    padding: 8,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.borderColor.white,
  },
});
