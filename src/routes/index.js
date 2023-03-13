import Detalhes from "../pages/Detalhes";
import GeralDash from "../pages/Geral";
import TabelaStatusGeral from "../pages/Tabela";

const rotas = [
  {
    path: "/",
    element: <TabelaStatusGeral />,
  },
  {
    path: "/detalhes",
    element: <Detalhes />,
  },
  {
    path: "/dash",
    element: <GeralDash />,
  },
];

export default rotas;
