import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import ModalConfirmacao from "../../components/Modal";
import { GlobalContext } from "../../contexts";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export function Detalhes() {
  const {
    infoTransporte,
    show,
    setShow,
    crgParada,
    setCargaParada,
    obsCargaParada,
    setObsCargaParada,
  } = useContext(GlobalContext);

  return (
    <div>
      <ModalConfirmacao lista={infoTransporte} />
      <div style={{ fontSize: 17, marginLeft: 10, marginTop: 20 }}>
        <div>Rota: {infoTransporte?.NRota}</div>
        <div>Transporte: {infoTransporte?.Transporte}</div>
        <div>NF's Reentrega:{infoTransporte?.Nf}</div>
        <div>Cliente: {infoTransporte?.Cliente}</div>
        <div>Cidade: {infoTransporte?.Cidade}</div>
        <div>Transportadora: {infoTransporte?.Bairro}</div>
        <div>Placa: {infoTransporte?.Placa}</div>
        <div>QTD entregas: {infoTransporte?.Qtdentregas}</div>
        <div>Peso Lactalis: {infoTransporte?.LDB}</div>
        <div>Peso Itambé: {infoTransporte?.ITB}</div>
        <div>Reentrega: {infoTransporte?.Reentrega}</div>
        <div>Inicio Separação: {infoTransporte?.inicioSeparacao}</div>
        <div>Termino Separação: {infoTransporte?.fimSeparacao}</div>
        <div>Inicio Conferencia: {infoTransporte?.inicioCarregamento}</div>
        <div>Termino Carregamento: {infoTransporte?.fimCarregamento}</div>
        <br></br>
        <div style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
          {infoTransporte.cargaparada ? "Carga Parada" : ""}
        </div>
        <br></br>
        <Form.Check
          label={`Carga Parada `}
          onChange={(e) => {
            if (e.target.checked) {
              setCargaParada(true);
              console.log(crgParada);
            }
          }}
        />
        <br></br>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Obs:</Form.Label>
          <Form.Control
            value={obsCargaParada}
            onChange={(e) => setObsCargaParada(e.target.value)}
            type="text"
            placeholder="Informe o motivo da carga parada"
            as="textarea"
          />
        </Form.Group>
        <br></br>
        <br></br>
        <br></br>
        <Button onClick={() => setShow(true)}>Atualizar</Button>
      </div>
    </div>
  );
}
