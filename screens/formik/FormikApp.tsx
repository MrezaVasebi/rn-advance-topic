import RootScreen from "@/RootScreen";
import { AppButton, CheckBox, GoBackButton, RadioButton } from "@/buttons";
import { colors } from "@/colors";
import { AppText } from "@/texts";
import { Formik, FormikProps } from "formik";
import React, { useState } from "react";
import {
  GestureResponderEvent,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { CityModal, FormikError, FormikInput } from "./components";
import {
  ICity,
  IFields,
  IFormikApp,
  IFormikValues,
  IGender,
} from "./interfaces";
import { validation_schema } from "./schema";

const FormikApp = (props: IFormikApp) => {
  let fields: Array<IFields> = [
    { lbl: "Name", name: "name", type: "input" },
    { lbl: "Email", name: "email", type: "input" },
    { lbl: "Phone Number", name: "phoneNumber", type: "input" },
    { lbl: "Age", name: "age", type: "input" },
    { lbl: "Gender", name: "gender", type: "radio" },
    { lbl: "Password", name: "password", type: "input" },
    { lbl: "Confirm Password", name: "confirmPassword", type: "input" },
    { lbl: "Choose city", name: "city", type: "modal" },
    { lbl: "Accept Condition", name: "acceptCondition", type: "checkbox" },
  ];

  const initialValues: IFormikValues = {
    name: "",
    age: "",
    city: "",
    email: "",
    gender: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
    acceptCondition: false,
  };

  const gender: IGender[] = [
    { lbl: "Male", name: "male" },
    { lbl: "Female", name: "female" },
    { lbl: "Other", name: "other" },
  ];

  const cities: ICity[] = [
    { name: "tabriz", lbl: "Tabriz" },
    { name: "tehran", lbl: "Tehran" },
    { name: "shiraz", lbl: "Shiraz" },
  ];

  const [cityModal, setModal] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<ICity>();

  const handleOnSelectCity = (item: ICity) => {
    // selected city
    setSelectedCity(item);

    // close modal
    setModal(false);
  };

  const handleResetForm = (formikProps: FormikProps<IFormikValues>) => {
    // clear form values
    formikProps.resetForm();

    // clear selected city
    setSelectedCity({ lbl: "", name: "" });
  };

  /*
  FORMIK Options:
  values -> form values.
  errors -> handle form errors.
  resetForm -> clear forms values.
  handleChange -> to handle input value.
  handleBlur -> for textInput onBlur function.
  setSubmitting -> change isSubmitting status.
  handleSubmit -> to handle when submit values.
  isSubmitting -> fire when press handleSubmit.
  setFieldValue -> set value of form field directly.
  isValid -> true if state.errors is empty, otherwise false.
  submitCount -> Number of times user tried to submit the form.
  dirty -> True if any input has been touched. False otherwise.
  touched -> we don’t want to show these errors every time, only when there is an error and if the field is touched.
  */

  return (
    <RootScreen rootStyle={styles.rootStyle}>
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
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              // console.log({ values });

              actions.setSubmitting(true);

              setTimeout(() => {
                actions.setSubmitting(false);
              }, 2000);

              actions.resetForm();
              actions.setSubmitting(false);

              // clear selected city
              setSelectedCity({
                lbl: "",
                name: "",
              });
            }}
            validationSchema={validation_schema}
          >
            {(formikProps) => {
              return (
                <View>
                  {fields.map((el, index) => {
                    let name = el.name as keyof typeof initialValues;
                    let value = el.name as keyof typeof formikProps.values;

                    let itemError = formikProps.errors[name];
                    let itemValue = formikProps.values[value];
                    let itemTouched = formikProps.touched[name];

                    switch (el.type) {
                      case "input": {
                        return (
                          <FormikInput
                            key={index}
                            placeholder={el.lbl}
                            value={itemValue as string}
                            onBlur={formikProps.handleBlur(name)}
                            onChangeText={formikProps.handleChange(name)}
                            error={itemError && itemTouched ? itemError : ""}
                          />
                        );
                      }
                      case "radio": {
                        return (
                          <View key={index} style={{ marginTop: 15 }}>
                            <AppText label={el.lbl} />

                            <View style={styles.genderStyle}>
                              {gender.map((ele, gIndex) => {
                                return (
                                  <RadioButton
                                    key={gIndex}
                                    label={ele.lbl}
                                    isChecked={ele.name === itemValue}
                                    onPress={() =>
                                      formikProps.setFieldValue(
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
                                formikProps.setFieldValue(
                                  el.name,
                                  !itemValue,
                                  true
                                )
                              }
                            />

                            {itemError && itemTouched && (
                              <FormikError
                                label={itemError ?? ""}
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
                              onPress={() => setModal(true)}
                            >
                              {selectedCity?.name === "" ||
                              selectedCity?.name === undefined ? (
                                <>
                                  <AppText
                                    label={el.lbl}
                                    lblStyle={{ opacity: 0.5 }}
                                  />
                                </>
                              ) : (
                                <>
                                  <AppText
                                    label={selectedCity?.lbl as string}
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
                      onPress={
                        formikProps.handleSubmit as unknown as (
                          e: GestureResponderEvent
                        ) => void
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
                      onPress={() => handleResetForm(formikProps)}
                      btnStyle={{ ...styles.bntStyle, marginLeft: 15 }}
                    />
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>
      </ScrollView>

      {cityModal && (
        <CityModal
          cities={cities}
          closeModal={() => setModal(false)}
          handleOnSelectCity={(item) => handleOnSelectCity(item)}
        />
      )}
    </RootScreen>
  );
};

export default FormikApp;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    paddingTop: 0,
  },
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
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
});
