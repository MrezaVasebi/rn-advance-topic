import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useReducer } from "react";
import { auth } from "../../../firebaseConfig";

type initType = {
  pass: string;
  email: string;
  errMsg: string;
  loading: boolean;
  isChecked: boolean;
  errStatus: "error" | "success";
};

export const useAuth = () => {
  const initialState: initType = {
    pass: "",
    email: "",
    errMsg: "",
    loading: false,
    isChecked: false,
    errStatus: "error",
  };

  const set_email = (value: string) => ({
    type: "EMAIL",
    payload: value,
  });

  const set_pass = (value: string) => ({
    type: "PASS",
    payload: value,
  });

  const set_loading = (value: boolean) => ({
    type: "LOADING",
    payload: value,
  });

  const set_err_msg = (value: string) => ({
    type: "ERR_MSG",
    payload: value,
  });

  const set_err_status = (value: "error" | "success") => ({
    type: "ERR_STATUS",
    payload: value,
  });

  const set_is_checked = (value: boolean) => ({
    type: "IS_CHECKED",
    payload: value,
  });

  const reducer = (
    state = initialState,
    { type, payload }: { type: string; payload: any }
  ) => {
    switch (type) {
      case "IS_CHECKED":
        return { ...state, isChecked: payload as boolean };
      case "ERR_STATUS":
        return { ...state, errStatus: payload as "error" | "success" };
      case "ERR_MSG":
        return { ...state, errMsg: payload as string };
      case "LOADING":
        return { ...state, loading: payload as boolean };
      case "PASS":
        return { ...state, pass: payload as string };
      case "EMAIL":
        return { ...state, email: payload as string };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.errMsg.length !== 0) {
      setTimeout(() => {
        dispatch(set_err_msg(""));
        dispatch(set_err_status("error"));
      }, 3000);
    }
  }, [state.errMsg]);

  const setInfo = (identifier: string, value: string) => {
    if (value.length !== 0) {
      if (identifier === "email") dispatch(set_email(value));
      else dispatch(set_pass(value));
    }
  };

  const handleResetValue = () => {
    dispatch(set_pass(""));
    dispatch(set_email(""));
    dispatch(set_is_checked(false));
  };

  const handleIsChecked = () => {
    dispatch(set_is_checked(!state.isChecked));
  };

  const handleLogin = async () => {
    try {
      dispatch(set_loading(true));
      let response = await signInWithEmailAndPassword(
        auth,
        state.email,
        state.pass
      );

      // user found
      if (response.user) {
        dispatch(set_err_msg("Logged successfully."));
        dispatch(set_err_status("success"));

        dispatch(set_loading(false));
      } else {
        dispatch(set_loading(false));
        dispatch(set_err_msg("User not found."));
      }
    } catch (error) {
      dispatch(set_loading(false));

      console.log({ error });
      dispatch(set_err_msg("User not found."));
    }
  };

  const handleSignUp = async () => {
    try {
      dispatch(set_loading(true));

      createUserWithEmailAndPassword(auth, state.email, state.pass)
        .then((userCredential) => {
          dispatch(set_err_msg("User is created."));
          dispatch(set_err_status("success"));

          handleResetValue();
          // console.log({userCredential})
          dispatch(set_loading(false));
        })
        .catch((err: any) => {
          // console.log({ err });

          const errorCode = err.code;
          const errorMessage = err.message;

          dispatch(
            set_err_msg(
              `There is a user with entered email. Please use another one.`
            )
          );
          dispatch(set_loading(false));
        });
    } catch (error) {
      // console.log({ error });
      dispatch(set_err_msg("Three is an error, Please try again."));
      dispatch(set_loading(false));
    }
  };

  const handleOnPress = async () => {
    if (state.email.length === 0 || state.pass.length === 0) {
      dispatch(set_err_msg("Please enter correct email or password."));
    } else {
      if (!state.isChecked) {
        // signUp
        await handleSignUp();
      } else {
        // login
        await handleLogin();
      }
    }
  };

  return {
    handleIsChecked,
    state,
    handleResetValue,
    setInfo,
    handleOnPress,
  };
};
