import { useContext, useEffect, useState } from "react";
import Axios from "../../../config/config";
import { GlobalContext } from "../../../contexts";
import Lista from "../../Cadastro/Lista";
import Form from "react-bootstrap/Form";

export default function ListaEmCarregamento() {
  const { dados, setDados } = useContext(GlobalContext);
  const [transporte, setTransporte] = useState("");
  const [primieroFiltro, setPrimeiroFiltro] = useState([]);

  const filtro =
    transporte.length > 0
      ? primieroFiltro.filter(
          (item) =>
            item.Transporte?.includes(transporte.toUpperCase()) ||
            item.Nf?.includes(transporte.toUpperCase()) ||
            item.NRota?.includes(transporte.toUpperCase())
        )
      : primieroFiltro;

  async function buscarRegistros() {
    Axios.get("/largada")
      .then((response) => {
        setPrimeiroFiltro(
          response.data.filter(
            (item) => item.fimCarregamento === null && item.inicioCarregamento !== null && item.cargaparada !== "cargaparada"
          )
        );
      })
      .catch((erro) => console.log(erro));
  }

  useEffect(() => {
    buscarRegistros();
  }, []);
  return (
    <div style={{ padding: 10, marginTop: 20 }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Informe o Transporte</Form.Label>
          <Form.Control
            value={transporte}
            onChange={(e) => setTransporte(e.target.value)}
            type="number"
            placeholder="Coloque o transporte"
          />
        </Form.Group>
      </Form>
      <Lista lista={filtro} />
    </div>
  );
}
