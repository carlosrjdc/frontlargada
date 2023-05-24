import { useContext, useEffect, useState } from "react";
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

  const [placa, setPlaca] = useState(infoTransporte?.Placa.slice(0, 7));
  const [lacre, setLacre] = useState(infoTransporte?.lacre1);

  let padrao = /^[A-Z]{3}\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$/;
  let corresponde = padrao.test(placa);

  return (
    <div>
      <ModalConfirmacao placa={placa} lacre={lacre} lista={infoTransporte} />
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
          {infoTransporte.inicioSeparacao ? moment(new Date(infoTransporte?.inicioSeparacao)).format("DD/MM/YYYY HH:mm:ss") : ""}
        </div>
        <div>
          Termino Separação:{" "}
          {infoTransporte.fimSeparacao ? moment(new Date(infoTransporte?.fimSeparacao)).format("DD/MM/YYYY HH:mm:ss") : ""}
        </div>
        <div>
          Inicio Conferencia:{" "}
          {infoTransporte.inicioCarregamento
            ? moment(new Date(infoTransporte?.inicioCarregamento)).format("DD/MM/YYYY HH:mm:ss")
            : ""}
        </div>
        <div>
          Termino Carregamento:{" "}
          {infoTransporte.fimCarregamento ? moment(new Date(infoTransporte?.fimCarregamento)).format("DD/MM/YYYY HH:mm:ss") : ""}
        </div>
        <br></br>
        <div style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>{infoTransporte.cargaparada ? "Carga Parada" : ""}</div>
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>PLACA:</Form.Label>
          <Form.Control
            disabled={infoTransporte.fimCarregamento}
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            type="text"
            placeholder="Informe o motivo da carga parada"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>LACRE:</Form.Label>
          <Form.Control
            disabled={infoTransporte.fimCarregamento}
            value={lacre}
            onChange={(e) => setLacre(e.target.value)}
            type="text"
            placeholder="Informe o motivo da carga parada"
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
          <Button disabled={!corresponde || (!lacre && infoTransporte.inicioCarregamento)} onClick={() => setShow(true)}>
            Atualizar
          </Button>
          <Button disabled={!infoTransporte.cargaparada} onClick={() => setShowCargaParada(true)}>
            Retirar Carga Parada
          </Button>
        </div>
      </div>
    </div>
  );
}
