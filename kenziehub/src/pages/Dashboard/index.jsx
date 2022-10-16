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
        <div className="div__main">
          <h3>Tecnologias</h3>
          <svg
            width="34"
            height="32"
            viewBox="0 0 34 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.718506"
              width="32.4853"
              height="32"
              rx="4"
              fill="#212529"
            />
            <path
              d="M16.1759 21.5625H18.3093V17.3281H22.6079V15.2266H18.3093V11H16.1759V15.2266H11.8853V17.3281H16.1759V21.5625Z"
              fill="white"
            />
          </svg>
        </div>
        <h3>Que pena! Estamos em desenvolvimento :(</h3>
        <h4>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </h4>
      </Main>
    </>
  );
};

export default Dashboard;
