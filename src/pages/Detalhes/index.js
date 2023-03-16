import { useContext, useState } from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import ModalConfirmacao from "../../components/Modal.js";
import { GlobalContext } from "../../contexts";
import Form from "react-bootstrap/Form";
import ModalConfirmacaoCargaParada from "../../components/ModalRetirarCargaParada.js";

export default function Detalhes() {
  const {
    infoTransporte,
    show,
    showCargaParada,
    setShowCargaParada,
    setShow,
    crgParada,
    setCargaParada,
    obsCargaParada,
    setObsCargaParada,
  } = useContext(GlobalContext);

  return (
    <div>
      <ModalConfirmacao lista={infoTransporte} />
      <ModalConfirmacaoCargaParada lista={infoTransporte} />
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
        <div>
          Inicio Separação:{" "}
          {infoTransporte.inicioSeparacao
            ? moment(
                new Date(infoTransporte?.inicioSeparacao) - 10800000
              ).format("DD/MM/YYYY hh:mm")
            : ""}
        </div>
        <div>
          Termino Separação:{" "}
          {infoTransporte.fimSeparacao
            ? moment(new Date(infoTransporte?.fimSeparacao) - 10800000).format(
                "DD/MM/YYYY hh:mm"
              )
            : ""}
        </div>
        <div>
          Inicio Conferencia:{" "}
          {infoTransporte.inicioCarregamento
            ? moment(
                new Date(infoTransporte?.inicioCarregamento) - 10800000
              ).format("DD/MM/YYYY hh:mm")
            : ""}
        </div>
        <div>
          Termino Carregamento:{" "}
          {infoTransporte.fimCarregamento
            ? moment(
                new Date(infoTransporte?.fimCarregamento) - 10800000
              ).format("DD/MM/YYYY hh:mm")
            : ""}
        </div>
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: "5%",
            marginLeft: "5%",
            marginBottom: "5%",
          }}
        >
          <Button onClick={() => setShow(true)}>Atualizar</Button>
          <Button
            disabled={!infoTransporte.cargaparada}
            onClick={() => setShowCargaParada(true)}
          >
            Retirar Carga Parada
          </Button>
        </div>
      </div>
    </div>
  );
}
