import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import ListaAConferir from "./AConferir";
import ListaASeparar from "./ASeparar";
import ListaCarregado from "./Carregado";
import ListaEmCarregamento from "./EmCarregamento";
import ListaEmSeparacao from "./EmSeparacao";
import ListaGeral from "./Todos";

function TabelaStatusGeral() {
  return (
    <Tabs
      defaultActiveKey="listaGeral"
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
      <Tab eventKey="emCarregamento" title="Em Carregamento">
        <ListaEmCarregamento />
      </Tab>
      <Tab eventKey="carregado" title="Carregado">
        <ListaCarregado />
      </Tab>
      <Tab eventKey="listaGeral" title="Lista Geral">
        <ListaGeral />
      </Tab>
    </Tabs>
  );
}

export default TabelaStatusGeral;
