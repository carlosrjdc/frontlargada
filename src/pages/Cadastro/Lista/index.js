import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../contexts";

export default function Lista(props) {
  const { lista } = props;
  const { infoTransporte, setInfoTransporte, setStatus } =
    useContext(GlobalContext);

  function irParaDetalhes(item, status) {
    setInfoTransporte(item);
    setStatus(status);
    navigate("/detalhes");
  }

  const status = (item) => {
    if (item.inicioSeparacao === null) {
      return { status: "A Separar", texto: "Desejar iniciar Separação?" };
    } else if (item.fimSeparacao === null) {
      return { status: "Em Separação", texto: "Desejar finalizar Separação?" };
    } else if (item.inicioCarregamento === null) {
      return {
        status: "Aguardando Conferencia",
        texto: "Desejar iniciar Conferencia?",
      };
    } else if (item.fimCarregamento === null) {
      return {
        status: "Em carregamento",
        texto: "Deseja finalizar Carregamento?",
      };
    } else {
      return { status: "Carregado", texto: null };
    }
  };

  const navigate = useNavigate();

  return (
    <div style={{ marginTop: 15 }}>
      {lista?.map((item) => (
        <div
          onClick={() => irParaDetalhes(item, status(item).texto)}
          style={{
            backgroundColor: "#92b0e7",
            margin: 4,
            borderRadius: 10,
            padding: 5,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{item.NRota}</div>
            <div>{item.Transporte}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{item.Cliente}</div>
            <div>
              {item.Bairro} / {item.Placa}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {(
                parseInt(item.Reentrega) +
                parseInt(item.LDB) +
                +parseInt(item.ITB)
              ).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </div>
            <div style={{ fontWeight: "bold" }}>{status(item).status}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
