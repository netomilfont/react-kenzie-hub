import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalBackground, Modal, ModalHeader, ModalBody } from "./styles";
import { TechsContext } from "../../contexts/TechsContext/TechsContext";

const schema = yup.object({
  title: yup.string().required("O nome da tecnologia é obrigatório"),
  status: yup.string().required("O status da tecnolgia é obrigatório"),
});

const ModalCadTech = ({ closeModal }) => {
  const [loading, setLoading] = useState(false);
  const { userTechs } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = async (data) => {
    userTechs(data, setLoading);
  };

  return (
    <>
      <ModalBackground className="modal__background">
        <Modal className="modal__container" onSubmit={handleSubmit(submit)}>
          <ModalHeader className="modal__header">
            <h4>Cadastrar Tecnologia</h4>
            <button type="button" onClick={() => closeModal(false)}>
              X
            </button>
          </ModalHeader>
          <ModalBody className="modal__body">
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" {...register("title")} />
            <p>{errors.name?.message}</p>

            <label htmlFor="select">Selecionar status</label>
            <select name="select" {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <p>{errors.select?.message}</p>

            <button type="submit" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar Tecnologia"}
            </button>
          </ModalBody>
        </Modal>
      </ModalBackground>
    </>
  );
};

export default ModalCadTech;
