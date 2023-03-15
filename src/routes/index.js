import BuscarProduto from "../pages/BuscarProduto";
import Detalhes from "../pages/Detalhes";
import GeralDash from "../pages/Geral";
import TabelaStatusGeral from "../pages/Tabela";
import UploadEscala from "../pages/Upload";
import UploadEstoque from "../pages/UploadEstoque";

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
  {
    path: "/buscarproduto",
    element: <BuscarProduto />,
  },
  {
    path: "/uploadescala",
    element: <UploadEscala />,
  },
  {
    path: "/uploadContagem",
    element: <UploadEstoque />,
  },
];

export default rotas;
