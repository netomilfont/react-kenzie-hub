import Button from "../../components/Button";
import { Header, Logo, Section, Main } from "./styles";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  }

  return (
    <>
      <Header>
        <div className="container__header">
          <Logo>Kenzie Hub</Logo>
          <Button name="Sair" onClick={() => logOut()} />
        </div>
      </Header>
      <Section>
        <div className="container__section">
          <h3>Olá, {user.name} </h3>
          <p>{user.course_module}</p>
        </div>
      </Section>
      <Main>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <h4>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </h4>
      </Main>
    </>
  );
};

export default Dashboard;
