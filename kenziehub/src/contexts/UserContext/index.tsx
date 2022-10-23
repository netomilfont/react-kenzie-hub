import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ILoginFormData } from "../../pages/Login";
import { IRegisterFormData } from "../../pages/Register";
import { IUser, ITechs, IDefaultContextProps } from "../types/types";
import {
  IUserContext,
  iLoginResponse,
  IRegisterResponse,
  IUserResponse,
} from "./types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultContextProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);
  const [techsList, setTechsList] = useState([] as ITechs[]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        setGlobalLoading(true);
        try {
          const response = await api.get<IUserResponse>("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setTechsList(response.data.techs);
          navigate(currentRoute ? currentRoute : "/dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
          navigate("/");
        } finally {
          setGlobalLoading(false);
        }
      }
    })();
  }, []);

  const userLogin = async (
    data: ILoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post<iLoginResponse>("/sessions", data);

      setUser(response.data.user);
      setTechsList(response.data.user.techs);

      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      toast.success("Login realizado com sucesso!", {
        autoClose: 1500,
        theme: "dark",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        autoClose: 1500,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (data: IRegisterFormData) => {
    try {
      await api.post<IRegisterResponse>("/users", data);
      toast.success("Conta criada com sucesso!", {
        autoClose: 1500,
        theme: "dark",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        autoClose: 1500,
        theme: "dark",
      });
      console.log(error);
    }
  };

  const userLogout = () => {
    toast.success("O usuário foi deslogado!", {
      autoClose: 1500,
      theme: "dark",
    });
    setUser(null);
    setTechsList([]);
    navigate("/");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userRegister,
        currentRoute,
        setCurrentRoute,
        globalLoading,
        userLogout,
        techsList,
        setTechsList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
