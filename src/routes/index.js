import Cadastro from "../pages/Cadastro/front";

import { Detalhes } from "../pages/Detalhes";
import GeralDash from "../pages/Geral";
import TabelaStatusGeral from "../pages/Tabela";
import Transporte from "../pages/Transporte";

const rotas = [
  {
    path: "/",
    element: <Cadastro />,
  },
  {
    path: "/detalhes",
    element: <Detalhes />,
  },
  {
    path: "/dash",
    element: <GeralDash />,
  },
  {
    path: "/status",
    element: <TabelaStatusGeral />,
  },
];

export default rotas;
