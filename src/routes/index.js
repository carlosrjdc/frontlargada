import Cadastro from "../pages/Cadastro/front";

import { Detalhes } from "../pages/Detalhes";
import GeralDash from "../pages/Geral";
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
    path: "/transporte",
    element: <Transporte />,
  },
];

export default rotas;
