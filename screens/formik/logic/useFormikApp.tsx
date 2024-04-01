import { FormikHelpers, FormikProps } from "formik";
import { useState } from "react";
import { ICity, IFields, IFormikValues, IGender } from "../interfaces";

export const useFormikApp = () => {
  let inputFields: Array<IFields> = [
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

  const handleSelectCity = (item: ICity) => {
    // selected city
    setSelectedCity(item);

    // close modal
    setModal(false);
  };

  const handleResetForm = (formikProps: FormikProps<IFormikValues>): void => {
    // clear form values
    formikProps.resetForm();

    // clear selected city
    setSelectedCity({ lbl: "", name: "" });
  };

  // this function also get custom data
  // const submitHandler =
  //   ({ saving }) =>
  //   (values, actions) => {
  //     // console.log(saving);
  //     // console.log(actions);
  //     // console.log(values);
  //   };

  function submitHandler(
    values: IFormikValues,
    actions: FormikHelpers<IFormikValues>
  ) {
    console.log({ values, actions });
  }

  const fields = {
    gender,
    cities,
    cityModal,
    inputFields,
    selectedCity,
    initialValues,
  };

  return {
    fields,
    setModal,
    submitHandler,
    handleResetForm,
    handleSelectCity,
  };
};
