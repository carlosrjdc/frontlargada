import Axios from "../../../config/config.js"

const buscas = {
    todosRegistros: async ()=>{
        const dados = await Axios.get("/registros").then(response => {return response.data}).catch(erro=> console.log(erro))
        
    }
}

export default buscas