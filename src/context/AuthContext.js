import axios from "axios";
import { createContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useLocalStorage("s11g2", {});
  const history = useHistory();
  let isLoggedIn = authUser && authUser.token;

  const authenticate = (loginInfo) => {
    axios
      .post("http://localhost:9000/api/login", loginInfo)
      .then((res) => {
        setAuthUser(res.data);
        history.push("/friends");
      })
      .catch((err) => console.error(err.res.message));
  };

  const logOut = () => {
    axiosWithAuth()
      .get("logout")
      .finally(() => {
        setAuthUser({});
        history.push("/login");
      });
  };

  return (
    <AuthContext.Provider
      value={{ authUser, authenticate, logOut, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const AuthContext = createContext();

export default AuthContextProvider;
