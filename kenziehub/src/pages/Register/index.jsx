import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import { Form, Input, Title } from "../../components/Form/styles";
import {
  ModalRegister,
  ButtonPrimary,
} from "../../components/FormRegister/style";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
YupPassword(yup);

const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser inserido um email válido!")
    .required("O email é obrigatório"),
  password: yup
    .string()
    .minLowercase(1, "A senha deve conter no mínimo uma letra minúscula")
    .minUppercase(1, "A senha deve conter no mínimo uma letra maiscula")
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .minNumbers(1, "A senha deve conter no mínimo um número")
    .minSymbols(1, "A senha deve conter no mínimo um símbolo")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  bio: yup.string().required("A bio é obrigatória"),
  contact: yup.string().required("O contato é obrigatório"),
  course_module: yup.string().required("O módulo é obrigatório"),
});

const Register = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const submit = async (data) => {
    userRegister(data);
  };

  function backToLogin() {
    navigate("/");
  }

  return (
    <div>
      <>
        <ModalRegister>
          <div className="header__form">
            <Title>KenzieHub</Title>
            <Button name="Voltar" onClick={() => backToLogin()} />
          </div>
          <div className="container__form">
            <div className="div__form">
              <Form onSubmit={handleSubmit(submit)}>
                <h3>Crie sua conta</h3>
                <span>Rapido e grátis, vamos nessa</span>

                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome aqui"
                  {...register("name")}
                />
                <p>{errors.name?.message}</p>

                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Digite seu email aqui"
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>

                <label htmlFor="password">Senha</label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha aqui"
                  {...register("password")}
                />
                <p>{errors.password?.message}</p>

                <label htmlFor="confirm-password">Confirmar Senha</label>
                <Input
                  type="password"
                  id="confirm-password"
                  placeholder="Digite sua senha aqui"
                  {...register("confirmPassword")}
                />
                <p>{errors.confirmPassword?.message}</p>

                <label htmlFor="bio">Bio</label>
                <input
                  id="bio"
                  type="text"
                  placeholder="Digite sua bio aqui"
                  {...register("bio")}
                />
                <p>{errors.bio?.message}</p>

                <label htmlFor="contact">Contato</label>
                <input
                  id="contact"
                  type="text"
                  placeholder="Digite seu contato aqui"
                  {...register("contact")}
                />
                <p>{errors.contact?.message}</p>

                <label htmlFor="modulo">Selecionar módulo</label>
                <select
                  name=""
                  id="course_module"
                  {...register("course_module")}
                >
                  <option value="">Módulos aqui</option>
                  <option value="Módulo 1">Módulo 1</option>
                  <option value="Módulo 2">Módulo 2</option>
                  <option value="Módulo 3">Módulo 3</option>
                  <option value="Módulo 4">Módulo 4</option>
                  <option value="Módulo 5">Módulo 5</option>
                  <option value="Módulo 6">Módulo 6</option>
                </select>
                <p>{errors.course_module?.message}</p>

                <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
              </Form>
            </div>
          </div>
        </ModalRegister>
      </>
    </div>
  );
};

export default Register;
