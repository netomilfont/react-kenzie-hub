import { createContext, useContext, useState } from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const { techsList, setTechsList } = useContext(UserContext);
  const [cadModal, setCadModal] = useState(false);

  const userTechs = async (data, setLoading) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");

      const response = await api.post("users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log(response);

      const newData = [
        ...techsList,
        {
          title: response.data.title,
          status: response.data.status,
          id: response.data.id,
        },
      ];

      toast.success("Tecnologia cadastrada com sucesso!", {
        autoClose: 1500,
        theme: "dark",
      });
      setTechsList(newData);
      setCadModal(false);
    } catch (error) {
      toast.error("Tecnologia não foi cadastrada!", {
        autoClose: 1500,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  const userTechsDelete = async (clickedTech, setLoading) => {
    console.log(clickedTech);
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKEN");

      const newData = techsList.filter((tech) => tech !== clickedTech);

      await api.delete(`users/techs/${clickedTech.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Tecnologia excluída com sucesso!", {
        autoClose: 1500,
        theme: "dark",
      });
      setTechsList(newData);
    } catch (error) {
      toast.error("Tecnologia não foi excluída!", {
        autoClose: 1500,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechsContext.Provider
      value={{
        techsList,
        setTechsList,
        userTechs,
        cadModal,
        setCadModal,
        userTechsDelete,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
