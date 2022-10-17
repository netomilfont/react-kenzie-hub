import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Loading } from "./styles";

const GlobalLoading = ({ children }) => {
  const { globalLoading } = useContext(UserContext);
  return <>{globalLoading ? <Loading></Loading> : <>{children}</>}</>;
};

export default GlobalLoading;
