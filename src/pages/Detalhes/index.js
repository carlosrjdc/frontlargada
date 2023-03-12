import { useContext } from "react";
import { Button } from "react-bootstrap";
import ModalConfirmacao from "../../components/Modal";
import { GlobalContext } from "../../contexts";

export function Detalhes() {
  const { infoTransporte, show, setShow } = useContext(GlobalContext);

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
        <Button onClick={() => setShow(true)}>Atualizar</Button>
      </div>
    </div>
  );
}
