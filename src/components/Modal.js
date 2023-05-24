import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GlobalContext } from "../contexts";
import Form from "react-bootstrap/Form";
import Axios from "../config/config";
import { useNavigate } from "react-router-dom";

export default function ModalConfirmacao(props) {
  const { show, setShow, stts, crgParada, obsCargaParada, setObsCargaParada } = useContext(GlobalContext);
  const handleClose = () => setShow(false);
  const { lista, placa, lacre } = props;

  const navigate = useNavigate();

  function atualizarBancodeDados() {
    if (!crgParada) {
      const verInfo = status();
      switch (verInfo) {
        case "inicioSeparacao":
          Axios.put(`largada/${lista.id}`, {
            inicioSeparacao: new Date(),
            Placa: placa,
            lacre1: lacre ? lacre.toString() : null,
          });
          break;
        case "fimSeparacao":
          Axios.put(`largada/${lista.id}`, {
            fimSeparacao: new Date(),
            Placa: placa,
            lacre1: lacre ? lacre.toString() : null,
          });
          break;
        case "inicioCarregamento":
          Axios.put(`largada/${lista.id}`, {
            inicioCarregamento: new Date(),
            Placa: placa,
            lacre1: lacre ? lacre.toString() : null,
          });
          break;
        case "fimCarregamento":
          Axios.put(`largada/${lista.id}`, {
            fimCarregamento: new Date(),
            Placa: placa,
            lacre1: lacre.toString(),
          });
          break;
        default:
          console.log(`Não Localizado ${verInfo}.`);
      }
    } else {
      Axios.put(`largada/${lista.id}`, {
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
