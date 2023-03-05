import Cadastro from "../pages/Cadastro/front";

import { Detalhes } from "../pages/Detalhes";
import GeralDash from "../pages/Geral";


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
        element: <GeralDash/>
      },

  ];
  
  export default rotas;