interface IFormikAppNavigation {
  navigate: (routeName: string, params?: object) => void;
  goBack: () => void;
}

export interface IFormikApp {
  navigation: IFormikAppNavigation;
}

export interface IFields {
  lbl: string;
  name: string;
  type: "input" | "radio" | "checkbox" | "modal";
}

export interface IFormikValues {
  age: string;
  name: string;
  city: string;
  email: string;
  gender: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
  acceptCondition: boolean;
}

export interface IGender {
  lbl: string;
  name: "male" | "female" | "other";
}

export interface ICity {
  lbl: string;
  name: string;
}
