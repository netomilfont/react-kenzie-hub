import Button from "../../components/Button";
import { Header, Logo, Section, Main } from "./styles";
import ReactModal from "react-modal";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechsContext } from "../../contexts/TechsContext";
import ModalCadTech from "../../components/ModalCadTech";
import { Loading } from "../../components/GlobalLoading/styles";

ReactModal.setAppElement("#root");

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { user, userLogout } = useContext(UserContext);
  const { techsList, cadModal, setCadModal, userTechsDelete } =
    useContext(TechsContext);

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
            onClick={() => setCadModal(true)}
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
            <h4>Você não possui nenhuma tecnologia cadastrada!</h4>
          ) : (
            techsList.map((tech, index) => (
              <li key={index} id={tech.id}>
                <h4>{tech.title}</h4>
                <div className="container__infoTech">
                  <p>{tech.status}</p>
                  <button
                    onClick={() => userTechsDelete(tech, setLoading)}
                    disabled={loading}
                  >
                    {loading ? (
                      <Loading></Loading>
                    ) : (
                      <svg
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.39993 12C2.07076 12 1.78273 11.9 1.53585 11.7C1.28897 11.5 1.16553 11.2667 1.16553 11V1.5H0.322021V0.5H4.18981V0H9.62118V0.5H13.489V1.5H12.6455V11C12.6455 11.2667 12.522 11.5 12.2751 11.7C12.0283 11.9 11.7402 12 11.4111 12H2.39993ZM11.4111 1.5H2.39993V11H11.4111V1.5ZM4.58071 9.56667H5.81511V2.91667H4.58071V9.56667ZM7.99588 9.56667H9.23028V2.91667H7.99588V9.56667ZM2.39993 1.5V11V1.5Z"
                          fill="white"
                          fillOpacity="0.8"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </Main>
      {cadModal && <ModalCadTech closeModal={setCadModal} />}
    </>
  );
};

export default Dashboard;
