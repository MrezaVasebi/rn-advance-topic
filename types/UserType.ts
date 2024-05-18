export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
  company: Company;
  address: Address;
}

export interface Address {
  geo: Geo;
  city: string;
  suite: string;
  street: string;
  zipcode: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  bs: string;
  name: string;
  catchPhrase: string;
}

export interface UserTodo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
