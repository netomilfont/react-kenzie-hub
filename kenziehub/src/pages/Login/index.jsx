// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Title, ModalLogin } from "../../components/Form/styles";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import YupPassword from "yup-password";
import { useState } from "react";
YupPassword(yup);

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser inserido um email válido!")
    .required("O email é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});

const Login = ({ setUser }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const submit = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      toast.success("Login realizado com sucesso!", {
        autoClose: 2500,
        theme: "dark",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        autoClose: 2500,
        theme: "dark",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  function registerUser() {
    navigate("/register");
  }

  return (
    <>
      <ModalLogin>
        <Title>KenzieHub</Title>
        <div className="container__form">
          <div className="div__form">
            <Form onSubmit={handleSubmit(submit)}>
              <h3>Login</h3>

              <label htmlFor="email">Email</label>
              <Input type="email" id="email" {...register("email")} />
              <p>{errors.email?.message}</p>

              <label htmlFor="password">Senha</label>
              <Input type="password" id="password" {...register("password")} />
              <p>{errors.password?.message}</p>

              <button type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </Form>
            <div className="div__register">
              <span>Ainda não possui uma conta?</span>
              <button className="btn__register" onClick={() => registerUser()}>
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      </ModalLogin>
      <ToastContainer />
    </>
  );
};

export default Login;
