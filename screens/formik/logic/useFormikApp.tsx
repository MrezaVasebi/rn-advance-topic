import { FormikHelpers } from "formik";

interface IFormValues {
  age: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
  // acceptCondition: boolean;
  gender: "male" | "female" | "other" | "";
}

export const useFormikApp = () => {
  const initialValues: IFormValues = {
    age: "",
    name: "",
    email: "",
    gender: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
    // acceptCondition: false,
  };

  const onSubmit = (
    values: IFormValues,
    formikHelpers: FormikHelpers<IFormValues>
  ) => {
    console.log({ values, formikHelpers });
  };

  const validate = (values: IFormValues) => {
    const errors: IFormValues = {
      age: "",
      name: "",
      email: "",
      gender: "",
      password: "",
      phoneNumber: "",
      confirmPassword: "",
      // acceptCondition: false,
    };

    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length <= 3) {
      errors.name = "Name should be more than 3 characters.";
    } else if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    } else if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    } else if (values.phoneNumber.length < 11) {
      errors.phoneNumber = "Phone Number should be 11 characters.";
    } else if (!values.age) {
      errors.age = "Age is a required field.";
    } else if (+values.age <= 18) {
      errors.age = "Invalid entered age.";
    } else if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 5) {
      errors.password = "Password should be more than 5 characters.";
    } else if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords are not matched.";
    }

    return errors;
  };

  return {
    initialValues,
    onSubmit,
    validate,
  };
};
