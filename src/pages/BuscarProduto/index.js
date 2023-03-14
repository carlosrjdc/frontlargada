import { useEffect, useState } from "react";
import MenuInferior from "../../components/Menu";
import Form from "react-bootstrap/Form";
import Axios from "../../config/config.js";

export default function BuscarProduto() {
  const [contagem, setContagem] = useState([]);
  const [transporte, setTransporte] = useState("");

  const filtro =
    transporte.length > 0
      ? contagem.filter((item) => item.sku?.includes(transporte.toUpperCase()))
      : contagem;

  useEffect(() => {
    Axios.get("/registroscontagem").then((response) =>
      setContagem(response.data)
    );
  }, []);

  return (
    <div>
      <MenuInferior />
      <div style={{ margin: 10 }}>
        <Form.Control
          style={{ padding: 10 }}
          value={transporte}
          onChange={(e) => setTransporte(e.target.value)}
          type="number"
          placeholder="Informe o SKU"
        />
      </div>
      {filtro.map((item) => {
        return (
          <div style={{ margin: 10, background: "#92b0e7" }}>
            <div style={{ color: "red", fontWeight: "bold" }}>
              Endereço: {item.endereco}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              <div>SKU: {item.sku}</div>
              <div>{item.descricao}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              <div>Quantidade: {item.unidads}</div>
              <div>Lote: {item.lote}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              <div>Fabricação: {item.datafab}</div>
              <div>{item.status}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
