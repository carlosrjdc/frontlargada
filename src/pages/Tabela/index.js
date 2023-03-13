import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MenuInferior from "../../components/Menu";

import ListaAConferir from "./AConferir";
import ListaASeparar from "./ASeparar";
import CargaParada from "./CargaParada";
import ListaCarregado from "./Carregado";
import ListaEmCarregamento from "./EmCarregamento";
import ListaEmSeparacao from "./EmSeparacao";
import ListaGeral from "./Todos";

function TabelaStatusGeral() {
  const [defaultKey, setDefaultKey] = useState("aSeparar");
  return (
    <div>
      <MenuInferior />
      <Tabs
        defaultActiveKey={defaultKey}
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="aSeparar" title="A Separar">
          <ListaASeparar />
        </Tab>
        <Tab eventKey="emSeparacao" title="Em Separação">
          <ListaEmSeparacao />
        </Tab>
        <Tab eventKey="aConferir" title="A Conferir">
          <ListaAConferir />
        </Tab>
        <Tab
          onSelect={() => setDefaultKey("emCarregamento")}
          onClick={() => setDefaultKey("emCarregamento")}
          eventKey="emCarregamento"
          title="Em Carregamento"
        >
          <ListaEmCarregamento />
        </Tab>
        <Tab eventKey="carregado" title="Carregado">
          <ListaCarregado />
        </Tab>
        <Tab eventKey="cargaparada" title="Carga Parada">
          <CargaParada />
        </Tab>
        <Tab eventKey="listaGeral" title="Lista Geral">
          <ListaGeral />
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabelaStatusGeral;
