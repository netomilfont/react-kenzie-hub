import Button from "../../components/Button";
import { Header, Logo, Section, Main } from "./styles";
import ReactModal from "react-modal";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechsContext } from "../../contexts/TechsContext";

ReactModal.setAppElement("#root");

const Dashboard = () => {
  const { user, userLogout } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const { techsList } = useContext(TechsContext);

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <>
      <Header>
        <div className="container__header">
          <Logo>Kenzie Hub</Logo>
          <Button name="Sair" onClick={() => userLogout()} />
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
            onClick={() => handleOpenModal()}
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
        <ul>
          {techsList.length === 0 ? (
            <h4>Você não possui uma tecnologia cadastrada!</h4>
          ) : (
            techsList.map((tech) => (
              <li>
                <h4>{tech.title}</h4>
                <p>{tech.status}</p>
              </li>
            ))
          )}
        </ul>
        <ReactModal isOpen={modalOpen} onRequestClose={handleCloseModal}>
          <h4>TESTEEEEEEEEE</h4>
        </ReactModal>
      </Main>
    </>
  );
};

export default Dashboard;
