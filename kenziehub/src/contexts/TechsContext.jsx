import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const { techsList, setTechsList } = useContext(UserContext);

  return (
    <TechsContext.Provider value={{ techsList, setTechsList }}>
      {children}
    </TechsContext.Provider>
  );
};
