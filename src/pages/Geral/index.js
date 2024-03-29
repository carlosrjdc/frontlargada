import { useEffect, useState } from "react";
import MenuInferior from "../../components/Menu";
import Axios from "../../config/config.js";

export default function GeralDash() {
  const [dados, setDados] = useState([]);
  const [infoSeparacao, setInfoSeparacao] = useState({});

  async function AtualizarRegistro() {
    await Axios.get("/largada")
      .then(async (response) => {
        await setDados(response.data);
        await setInfoSeparacao(
          await {
            quantidade: response.data.length,
            volume: response.data.reduce(
              (acc, valor) => parseInt(acc) + (parseInt(valor.Reentrega) + parseInt(valor.LDB) + parseInt(valor.ITB)),
              0
            ),
            quantidadeCargaParada: response.data.filter((atual) => atual["cargaparada"] === "cargaparada").length,
            volumeCargaParada: response.data
              .filter((atual) => atual["cargaparada"] === "cargaparada")
              .reduce((acc, valor) => parseInt(acc) + (parseInt(valor.Reentrega) + parseInt(valor.LDB) + parseInt(valor.ITB)), 0),

            quantidadeASeparar: response.data.filter(
              (atual) => atual["inicioSeparacao"] === null && atual["cargaparada"] !== "cargaparada"
            ).length,
            volumeASeparar: response.data
              .filter((atual) => atual["inicioSeparacao"] === null && atual["cargaparada"] !== "cargaparada")
              .reduce((acc, valor) => parseInt(acc) + (parseInt(valor.Reentrega) + parseInt(valor.LDB) + parseInt(valor.ITB)), 0),
            quantidadeEmSeparacao: response.data.filter(
              (atual) =>
                atual["inicioSeparacao"] !== null &&
                atual["fimSeparacao"] === null &&
                atual["inicioCarregamento"] === null &&
                atual["fimCarregamento"] === null &&
                atual["cargaparada"] !== "cargaparada"
            ).length,
            volumeEmSeparacao: response.data
              .filter(
                (atual) =>
                  atual["inicioSeparacao"] !== null &&
                  atual["fimSeparacao"] === null &&
                  atual["inicioCarregamento"] === null &&
                  atual["fimCarregamento"] === null &&
                  atual["cargaparada"] !== "cargaparada"
              )
              .reduce((acc, valor) => parseInt(acc) + (parseInt(valor.Reentrega) + parseInt(valor.LDB) + parseInt(valor.ITB)), 0),
            quantidadeAConferir: response.data.filter(
              (atual) =>
                atual["inicioSeparacao"] !== null &&
                atual["fimSeparacao"] !== null &&
                atual["inicioCarregamento"] === null &&
                atual["fimCarregamento"] === null &&
                atual["cargaparada"] !== "cargaparada"
            ).length,
            volumeAConferir: response.data
              .filter(
                (atual) =>
                  atual["inicioSeparacao"] !== null &&
                  atual["fimSeparacao"] !== null &&
                  atual["inicioCarregamento"] === null &&
                  atual["fimCarregamento"] === null &&
                  atual["cargaparada"] !== "cargaparada"
              )
              .reduce((acc, valor) => parseInt(acc) + (parseInt(valor.Reentrega) + parseInt(valor.LDB) + parseInt(valor.ITB)), 0),
            quantidadeEmConferencia: response.data.filter(
              (atual) =>
                atual["inicioSeparacao"] !== null &&
                atual["fimSeparacao"] !== null &&
                atual["inicioCarregamento"] !== null &&
                atual["fimCarregamento"] === null &&
                atual["cargaparada"] !== "cargaparada"
            ).length,
            volumeEmConferencia: response.data
              .filter(
                (atual) =>
                  atual["inicioSeparacao"] !== null &&
                  atual["fimSeparacao"] !== null &&
                  atual["inicioCarregamento"] !== null &&
                  atual["fimCarregamento"] === null &&
                  atual["cargaparada"] !== "cargaparada"
              )
              .reduce((acc, valor) => parseInt(acc) + (parseInt(valor.Reentrega) + parseInt(valor.LDB) + parseInt(valor.ITB)), 0),
            quantidadeCarregado: response.data.filter(
              (atual) =>
                atual["inicioSeparacao"] !== null &&
                atual["fimSeparacao"] !== null &&
                atual["inicioCarregamento"] !== null &&
                atual["fimCarregamento"] !== null &&
                atual["cargaparada"] !== "cargaparada"
            ).length,
            volumeCarregado: response.data
              .filter(
                (atual) =>
                  atual["inicioSeparacao"] !== null &&
                  atual["fimSeparacao"] !== null &&
                  atual["inicioCarregamento"] !== null &&
                  atual["fimCarregamento"] !== null &&
                  atual["cargaparada"] !== "cargaparada"
              )
              .reduce((acc, valor) => parseInt(acc) + (parseInt(valor.Reentrega) + parseInt(valor.LDB) + parseInt(valor.ITB)), 0),
          }
        );
      })
      .catch((erro) => console.log(erro));
  }

  useEffect(() => {
    AtualizarRegistro();
  }, [infoSeparacao]);

  function somar() {
    const ASeparar = dados.filter((atual) => atual["inicioSeparacao"] === null);
    const cargaParada = dados.filter((atual) => atual["cargaparada"] === "cargaparada");
    const emSeparacao = dados.filter(
      (atual) =>
        atual["inicioSeparacao"] !== null &&
        atual["fimSeparacao"] === null &&
        atual["inicioCarregamento"] === null &&
        atual["fimCarregamento"] === null
    );
    const AConferir = dados.filter(
      (atual) =>
        atual["inicioSeparacao"] !== null &&
        atual["fimSeparacao"] !== null &&
        atual["inicioCarregamento"] === null &&
        atual["fimCarregamento"] === null
    );
    const EmConferencia = dados.filter(
      (atual) =>
        atual["inicioSeparacao"] !== null &&
        atual["fimSeparacao"] !== null &&
        atual["inicioCarregamento"] !== null &&
        atual["fimCarregamento"] === null
    );
    const Carregado = dados.filter(
      (atual) =>
        atual["inicioSeparacao"] !== null &&
        atual["fimSeparacao"] !== null &&
        atual["inicioCarregamento"] !== null &&
        atual["fimCarregamento"] !== null
    );
  }

  /*const dadosSeparados = {
      ASeparar: ASeparar.length,
      emSeparacao: emSeparacao.length,
      AConferir: AConferir.length,
      EmConferencia: EmConferencia.length,
      Carregado: Carregado.length,
      ASepararSoma: ASeparar.reduce(
        (acc, valor) =>
          parseInt(acc) +
          (parseInt(valor.Reentrega) +
            parseInt(valor.LDB) +
            parseInt(valor.ITB)),
        0
      ),
      emSeparacaoSoma: emSeparacao.reduce(
        (acc, valor) =>
          parseInt(acc) +
          (parseInt(valor.Reentrega) +
            parseInt(valor.LDB) +
            parseInt(valor.ITB)),
        0
      ),
      AConferirSoma: AConferir.reduce(
        (acc, valor) =>
          parseInt(acc) +
          (parseInt(valor.Reentrega) +
            parseInt(valor.LDB) +
            parseInt(valor.ITB)),
        0
      ),
      EmConferenciaSoma: EmConferencia.reduce(
        (acc, valor) =>
          parseInt(acc) +
          (parseInt(valor.Reentrega) +
            parseInt(valor.LDB) +
            parseInt(valor.ITB)),
        0
      ),
      CarregadoSoma: Carregado.reduce(
        (acc, valor) =>
          parseInt(acc) +
          (parseInt(valor.Reentrega) +
            parseInt(valor.LDB) +
            parseInt(valor.ITB)),
        0
      ),
    };

    return dadosSeparados;
  }*/

  //f8e002

  return (
    <div>
      <MenuInferior />
      <div style={{ textAlign: "center", marginTop: 10, fontSize: 20 }}>
        <div>STATUS ATUALIZADO ONLINE</div>
        <div
          style={{
            borderRadius: 5,
            backgroundColor: "#7d92f1",
            margin: 5,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          Total: {infoSeparacao.quantidade}
          <br></br>Volume:
          {parseInt(infoSeparacao.volume).toLocaleString("pt-BR")}
          <br></br>
        </div>
        <div
          style={{
            borderRadius: 5,
            backgroundColor: "#7d92f1",
            margin: 5,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          Carga Parada: {infoSeparacao.quantidadeCargaParada}
          <br></br>Volume:
          {parseInt(infoSeparacao.volumeCargaParada).toLocaleString("pt-BR")}
          <br></br>
        </div>
        <div
          style={{
            borderRadius: 5,
            backgroundColor: "#7d92f1",
            margin: 5,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          A Separar: {infoSeparacao.quantidadeASeparar}
          <br></br>Volume:
          {parseInt(infoSeparacao.volumeASeparar).toLocaleString("pt-BR")}
          <br></br>
        </div>
        <div
          style={{
            borderRadius: 5,
            backgroundColor: "#7d92f1",
            margin: 5,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          Em Separação: {infoSeparacao.quantidadeEmSeparacao}
          <br></br>Volume: {parseInt(infoSeparacao?.volumeEmSeparacao).toLocaleString("pt-BR")}
          <br></br>
        </div>
        <div
          style={{
            borderRadius: 5,
            backgroundColor: "#7d92f1",
            margin: 5,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          A Conferir: {infoSeparacao.quantidadeAConferir}
          <br></br>Volume: {parseInt(infoSeparacao?.volumeAConferir).toLocaleString("pt-BR")}
          <br></br>
        </div>
        <div
          style={{
            borderRadius: 5,
            backgroundColor: "#7d92f1",
            margin: 5,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          Em Carregamento: {infoSeparacao.quantidadeEmConferencia}
          <br></br>Volume:
          {parseInt(infoSeparacao?.volumeEmConferencia).toLocaleString("pt-BR")}
          <br></br>
        </div>
        <div
          style={{
            borderRadius: 5,
            backgroundColor: "#7d92f1",
            margin: 5,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          Carregado: {infoSeparacao.quantidadeCarregado}
          <br></br>Volume:
          {parseInt(infoSeparacao?.volumeCarregado).toLocaleString("pt-BR")}
          <br></br>
        </div>
      </div>
    </div>
  );
}
