import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState();
  const [user, setUser] = useState(null);
  const [currentRoute, setCurrentRoute] = useState(null);
  const [techsList, setTechsList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        setGlobalLoading(true);
        try {
          const response = await api.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setTechsList(response.data.techs);
          navigate(currentRoute ? currentRoute : "/dashboard");
          console.log(response);
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

  const userLogin = async (data, setLoading) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (data) => {
    try {
      await api.post("/users", data);
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
