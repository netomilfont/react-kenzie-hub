// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Title, ModalLogin } from "../../components/Form/styles";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
YupPassword(yup);

export interface ILoginFormData {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser inserido um email válido!")
    .required("O email é obrigatório"),
  password: yup.string().required("A senha é obrigatória"),
});

const Login = () => {
  const { userLogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const submit = async (data: ILoginFormData) => {
    userLogin(data, setLoading);
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
    </>
  );
};

export default Login;
