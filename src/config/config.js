import axios from "axios";

const Axios = axios.create({
  baseURL: "https://auditoria-gold.vercel.app/",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export default Axios;
