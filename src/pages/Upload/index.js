import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormData from "form-data";
import { useState } from "react";
import Axios from "../../config/config";

export default function UploadEscala() {
  const [file, setFile] = useState();
  const [dados, setDados] = useState([]);
  const [value, setValue] = useState(0);
  const [statusExcluir, setStatusExcluir] = useState("");
  const [statusUpload, setStatusIpload] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(file);
    }
  };

  const excluirRegistros = async () => {
    Axios.delete("/largada")
      .then((response) => setStatusExcluir("Registro deletado com Sucesso!"))
      .then((erro) => console.log(erro));

    // ...
    // Inserimos aqui nossa chamada POST/PUT
    // para enviarmos nosso arquivo.
  };

  const addNewCard = async () => {
    const data = new FormData();
    data.append("arquivo", file);

    Axios.post("/largada/emmassa", data)
      .then((response) => setStatusIpload("Upload feito com sucesso"))
      .catch((erro) => setStatusIpload("Erro: provavel duplicidade no registro, ou planilha incorreta "));

    // ...
    // Inserimos aqui nossa chamada POST/PUT
    // para enviarmos nosso arquivo.
  };
  return (
    <div className="App">
      <div
        style={{
          margin: 10,
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          color: "red",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        <div> Excluir Escala "Atenção essa ação não tem volta!"</div>
        <Button style={{ margin: 10 }} onClick={excluirRegistros}>
          Excluir
        </Button>
      </div>
      <div style={statusExcluir ? { background: "yellow", padding: 5, fontWeight: "bold" } : null}>{statusExcluir}</div>
      <br></br>
      <div style={{ margin: 10 }}>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload da escala</Form.Label>
            <Form.Control type="file" onChange={(e) => handleFileChange(e)} />
          </Form.Group>
          <Button style={{ margin: 10, fontWeight: "bold" }} onClick={addNewCard}>
            Upload
          </Button>
          <div style={statusUpload ? { background: "yellow", padding: 5, fontWeight: "bold" } : null}>{statusUpload}</div>
        </Form>
      </div>
    </div>
  );
}
