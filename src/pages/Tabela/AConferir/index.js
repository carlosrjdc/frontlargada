import { useContext, useEffect, useState } from "react";
import Axios from "../../../config/config.js";
import { GlobalContext } from "../../../contexts";
import Lista from "../../Cadastro/Lista";
import Form from "react-bootstrap/Form";

export default function ListaAConferir() {
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
    Axios.get("/registros")
      .then((response) => {
        setPrimeiroFiltro(
          response.data.filter(
            (item) =>
              item.inicioCarregamento === null && item.fimSeparacao !== null
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
