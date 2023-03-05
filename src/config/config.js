import axios from "axios"

const Axios = axios.create({
    baseURL: "https://largadaapi.vercel.app/",
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default Axios