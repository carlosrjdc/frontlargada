import { useState } from "react";
import "./MenuInferior.css";

export default function MenuInferior() {
  const [selecionado, setSelecionado] = useState("");
  const [segundoselecionado, setSegundoSelecionado] = useState("");
  return (
    <div class="navbar">
      <a
        href="/"
        class={selecionado}
        onClick={() => {
          setSelecionado("active");
          setSegundoSelecionado("");
        }}
      >
        Cadastro
      </a>
      <a
        href="buscarproduto"
        class={segundoselecionado}
        onClick={() => {
          setSegundoSelecionado("active");
          setSelecionado("");
        }}
      >
        Buscar Produto
      </a>
      <a
        href="dash"
        class={segundoselecionado}
        onClick={() => {
          setSegundoSelecionado("active");
          setSelecionado("");
        }}
      >
        Dash
      </a>
    </div>
  );
}
