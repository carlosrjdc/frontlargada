import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GlobalContext } from "../contexts";
import Form from "react-bootstrap/Form";
import Axios from "../config/config";
import { useNavigate } from "react-router-dom";

export default function ModalConfirmacao(props) {
  const {
    show,
    setShow,
    stts,
    crgParada,
    obsCargaParada,
    setCargaParada,
    setObsCargaParada,
  } = useContext(GlobalContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { lista } = props;

  const navigate = useNavigate();

  function atualizarBancodeDados() {
    if (!crgParada) {
      const verInfo = status();
      switch (verInfo) {
        case "inicioSeparacao":
          Axios.put(`atualizar/${lista.id}`, {
            inicioSeparacao: new Date(),
          });
          break;
        case "fimSeparacao":
          Axios.put(`atualizar/${lista.id}`, {
            fimSeparacao: new Date(),
          });
          break;
        case "inicioCarregamento":
          Axios.put(`atualizar/${lista.id}`, {
            inicioCarregamento: new Date(),
          });
          break;
        case "fimCarregamento":
          Axios.put(`atualizar/${lista.id}`, {
            fimCarregamento: new Date(),
          });
          break;
        default:
          console.log(`Não Localizado ${verInfo}.`);
      }
    } else {
      Axios.put(`atualizar/${lista.id}`, {
        cargaparada: "cargaparada",
        obs: obsCargaParada,
      }).then(() => {
        setObsCargaParada("");
      });
    }
    setObsCargaParada("");
    setShow(false);
    navigate("/");
  }

  const status = () => {
    if (lista.inicioSeparacao === null) {
      return "inicioSeparacao";
    } else if (lista.fimSeparacao === null) {
      return "fimSeparacao";
    } else if (lista.inicioCarregamento === null) {
      return "inicioCarregamento";
    } else if (lista.fimCarregamento === null) {
      return "fimCarregamento";
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>TRANSPORTE: {lista.Transporte}</div>
          <div>Reentregas: {lista.Nf}</div>
          <div>Rota: {lista.NRota}</div>
          <div>Cliente: {lista.Cliente}</div>
          <br></br>
          <div>{stts}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
          <Button variant="primary" onClick={atualizarBancodeDados}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
