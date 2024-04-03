import RootScreen from "@/RootScreen";
import { AppButton, CheckBox, GoBackButton, RadioButton } from "@/buttons";
import { colors } from "@/colors";
import { AppText } from "@/texts";
import { Formik } from "formik";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { PropsFormikApp } from "screens/nav/FinalNavigation";
import { CityModal, FormikError, FormikInput } from "./components";
import { useFormikApp } from "./logic";
import { validation_schema } from "./schema";

const FormikApp = (props: PropsFormikApp) => {
  const hooks = useFormikApp();

  return (
    <RootScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <GoBackButton
          label="Formik App"
          onPress={() => props.navigation.goBack()}
        />

        <View style={styles.container}>
          <Formik
            initialValues={hooks.fields.initialValues}
            // onSubmit={(values, actions) => {
            //   handleSubmit(values);
            //   console.log({ values });

            //   actions.setSubmitting(true);

            //   setTimeout(() => {
            //     actions.setSubmitting(false);
            //   }, 2000);

            //   actions.resetForm();
            //   actions.setSubmitting(false);

            //   // clear selected city
            //   setSelectedCity({
            //     lbl: "",
            //     name: "",
            //   });
            // }}

            // onSubmit={submitHandler({ saving: false })} // sending custom data to submitHandler

            // onSubmit={() => {}}

            onSubmit={(values, actions) => {
              hooks.submitHandler(values, actions);
            }}
            validationSchema={validation_schema}
          >
            {(props) => {
              return (
                <View>
                  {hooks.fields.inputFields.map((el, index) => {
                    let name =
                      el.name as keyof typeof hooks.fields.initialValues;
                    let value = el.name as keyof typeof props.values;

                    let itemError = props.errors[name];
                    let itemValue = props.values[value];
                    let itemTouched = props.touched[name];

                    switch (el.type) {
                      case "input": {
                        return (
                          <FormikInput
                            name={name}
                            key={index}
                            placeholder={el.lbl}
                            value={itemValue as string}
                          />
                        );
                      }
                      case "radio": {
                        return (
                          <View key={index} style={{ marginTop: 15 }}>
                            <AppText label={el.lbl} />

                            <View style={styles.genderStyle}>
                              {hooks.fields.gender.map((ele, gIndex) => {
                                return (
                                  <RadioButton
                                    key={gIndex}
                                    label={ele.lbl}
                                    isChecked={ele.name === itemValue}
                                    onPress={() =>
                                      props.setFieldValue(
                                        el.name,
                                        ele.name,
                                        true
                                      )
                                    }
                                    btnStyle={{ marginRight: 15 }}
                                  />
                                );
                              })}
                            </View>

                            {itemError && itemTouched && (
                              <FormikError
                                label={itemError as string}
                                rootStyle={{ marginTop: 8 }}
                              />
                            )}
                          </View>
                        );
                      }
                      case "checkbox": {
                        return (
                          <View key={index} style={{ marginTop: 15 }}>
                            <CheckBox
                              label={el.lbl}
                              isChecked={itemValue as boolean}
                              onPress={() =>
                                props.setFieldValue(el.name, !itemValue, true)
                              }
                            />

                            {itemError && itemTouched && (
                              <FormikError
                                label={itemError as string}
                                rootStyle={{ marginTop: 8 }}
                              />
                            )}
                          </View>
                        );
                      }
                      case "modal": {
                        return (
                          <View key={index}>
                            <TouchableOpacity
                              style={styles.cityContainer}
                              onPress={() => hooks.setModal(true)}
                            >
                              {hooks.fields.selectedCity?.name === "" ||
                              hooks.fields.selectedCity?.name === undefined ? (
                                <>
                                  <AppText
                                    label={el.lbl}
                                    lblStyle={{ opacity: 0.5 }}
                                  />
                                </>
                              ) : (
                                <>
                                  <AppText
                                    label={
                                      hooks.fields.selectedCity?.lbl as string
                                    }
                                    lblStyle={{ color: colors.black }}
                                  />
                                </>
                              )}
                            </TouchableOpacity>

                            {itemError && itemTouched && (
                              <FormikError
                                label={itemError as string}
                                rootStyle={{ marginTop: 8 }}
                              />
                            )}
                          </View>
                        );
                      }
                      default:
                        return null;
                    }
                  })}

                  <View style={styles.buttonContainer}>
                    <AppButton
                      label="Submit"
                      onPress={() =>
                        // submitHandler({ saving: true })(props.values, props)

                        // props.handleSubmit as unknown as (
                        //   e: GestureResponderEvent
                        // ) => void

                        hooks.submitHandler(props.values, props)
                      }
                      btnStyle={styles.bntStyle}
                    />

                    <AppButton
                      label="Cancel"
                      // onPress={
                      //   props.resetForm as unknown as (
                      //     e: GestureResponderEvent
                      //   ) => void
                      // }
                      lblStyle={{ color: colors.red }}
                      onPress={() => hooks.handleResetForm(props)}
                      btnStyle={{ ...styles.bntStyle, marginLeft: 15 }}
                    />
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>
      </ScrollView>

      {hooks.fields.cityModal && (
        <CityModal
          cities={hooks.fields.cities}
          closeModal={() => hooks.setModal(false)}
          handleOnSelectCity={(item) => hooks.handleSelectCity(item)}
        />
      )}
    </RootScreen>
  );
};

export default FormikApp;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.purple,
  },
  title: {
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bntStyle: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  genderStyle: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cityContainer: {
    padding: 10,
    elevation: 2,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
  },
});
