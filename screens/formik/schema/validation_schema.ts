import * as Yup from "yup";

export const validation_schema = Yup.object().shape({
  name: Yup.string().required("Required.").label("Name"),
  email: Yup.string()
    .required("Email is required.")
    .email("Invalid email.")
    .label("Email"),
  phoneNumber: Yup.string()
    .length(
      11,
      ({ length }) => `
      Phone number should be ${length} characters.`
    )
    .notRequired()
    .label("Phone Number"),
  password: Yup.string()
    .trim()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(4, ({ min }) => `Password must be at least ${min} characters`)
    .max(15, ({ max }) => `Password can not be more than ${max} character.`)
    .required("Password is required")
    .label("Password"),
  confirmPassword: Yup.string()
    .trim()
    .required("Confirm password is required")
    .label("Confirm Password")
    .min(4, ({ min }) => `Password must be at least ${min} characters`)
    .max(15, ({ max }) => `Password can not be more than ${max} character.`)
    .equals([Yup.ref("password"), null]),
  // .test("passwords-match", "Password must match", function (value) {
  //   return this.parent.password === value;
  // }),
  // .oneOf([Yup.ref("password")], "Password must match."),
  age: Yup.string().required("Required field.").label("Age"),
  gender: Yup.string().label("Gender").required("Please select your gender."),
  acceptCondition: Yup.bool()
    .label("Accept Condition")
    .oneOf([true], "Field must be checked."),
  // .required("Please check accept condition."),
  city: Yup.string().label("City").required("Required."),
});
