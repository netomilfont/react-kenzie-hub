import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Loading } from "./styles";

interface IGlobalLoadingProps {
  children: React.ReactNode;
}

const GlobalLoading = ({ children }: IGlobalLoadingProps) => {
  const { globalLoading } = useContext(UserContext);
  return <>{globalLoading ? <Loading></Loading> : <>{children}</>}</>;
};

export default GlobalLoading;
