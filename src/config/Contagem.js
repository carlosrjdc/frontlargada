import axios from "axios";

const Contagem = axios.create({
  baseURL: "https://contagemestoqueapi.vercel.app/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export default Contagem;
