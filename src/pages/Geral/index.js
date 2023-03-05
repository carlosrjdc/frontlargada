import { useEffect, useState } from "react"
import Axios from "../../config/config"

export default function GeralDash(){

    const [ dados, setDados] = useState([])

    useEffect(()=>{
        Axios.get("registros").then(response => setDados(response.data)).catch(erro=> console.log(erro))
    },[])

    function somar(){
        const ASeparar = dados.filter((atual) => atual["inicioSeparacao"] === null )
        const emSeparacao = dados.filter((atual) => atual["inicioSeparacao"] !== null && atual["fimSeparacao"] === null && atual["inicioCarregamento"] === null && atual["fimCarregamento"] === null)
        const AConferir = dados.filter((atual) => atual["inicioSeparacao"] !== null && atual["fimSeparacao"] !== null && atual["inicioCarregamento"] === null && atual["fimCarregamento"] === null)
        const EmConferencia = dados.filter((atual) => atual["inicioSeparacao"] !== null && atual["fimSeparacao"] !== null && atual["inicioCarregamento"] !== null && atual["fimCarregamento"] === null)
        const Carregado = dados.filter((atual) => atual["inicioSeparacao"] !== null && atual["fimSeparacao"] !== null && atual["inicioCarregamento"] !== null && atual["fimCarregamento"] !== null)

        const dadosSeparados = {
            ASeparar: ASeparar.length,
            emSeparacao:emSeparacao.length ,
            AConferir:AConferir.length,
            EmConferencia:EmConferencia.length,
            Carregado:Carregado.length
        }

        return dadosSeparados
    }

//f8e002

    return <div style={{textAlign:"center", marginTop:20, fontSize:20}}><div>STATUS ATUALIZADO ONLINE</div>
        <div style={{borderRadius:5, backgroundColor:"#7d92f1", margin:5, paddingTop:30, paddingBottom:30}}> A Separar: {somar()?.ASeparar}  </div>
        <div style={{borderRadius:5, backgroundColor:"#7d92f1", margin:5, paddingTop:30, paddingBottom:30}}>Em Separação: {somar()?.emSeparacao}</div>
        <div style={{borderRadius:5, backgroundColor:"#7d92f1", margin:5, paddingTop:30, paddingBottom:30}}>A Conferir:  {somar()?.AConferir}</div>
        <div style={{borderRadius:5, backgroundColor:"#7d92f1", margin:5, paddingTop:30, paddingBottom:30}}>Em Conferencia: {somar()?.EmConferencia}</div>
        <div style={{borderRadius:5, backgroundColor:"#7d92f1", margin:5, paddingTop:30, paddingBottom:30}}>Carregado: {somar()?.Carregado}</div>
    </div>
}