import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEwFYTQY0BgVLnRR2K4PrWgpZQ0d3v6Y8",
  authDomain: "auth-566ab.firebaseapp.com",
  projectId: "auth-566ab",
  storageBucket: "auth-566ab.appspot.com",
  messagingSenderId: "924209853992",
  appId: "1:924209853992:web:56b44e7f0c929915be271d",
};

// initialize Firebase App
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
