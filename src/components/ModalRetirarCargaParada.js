import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GlobalContext } from "../contexts";
import Form from "react-bootstrap/Form";
import Axios from "../config/config";
import { useNavigate } from "react-router-dom";

export default function ModalConfirmacaoCargaParada(props) {
  const { showCargaParada, setShowCargaParada, stts, crgParada, obsCargaParada, setCargaParada, setObsCargaParada } =
    useContext(GlobalContext);
  const handleClose = () => setShowCargaParada(false);
  const handleShow = () => setShowCargaParada(true);
  const { lista } = props;

  const navigate = useNavigate();

  function atualizarBancodeDados() {
    Axios.put(`largada/${lista.id}`, {
      cargaparada: "",
      obs: "",
    }).then(() => {
      setCargaParada("");
      setObsCargaParada("");
      setShowCargaParada(false);
      navigate("/");
    });
  }

  return (
    <>
      <Modal show={showCargaParada} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>TRANSPORTE: {lista.Transporte}</div>
          <div>Reentregas: {lista.Nf}</div>
          <div>Rota: {lista.NRota}</div>
          <div>Cliente: {lista.Cliente}</div>
          <br></br>
          <div>{"Ao Clicar em salvar o transporte vai sair da carga parada"}</div>
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
