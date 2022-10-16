import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const GlobalLoading = ({ children }) => {
  const { globalLoading } = useContext(UserContext);
  return <>{globalLoading ? <h1>Carregando...</h1> : <>{children}</>}</>;
};

export default GlobalLoading;
