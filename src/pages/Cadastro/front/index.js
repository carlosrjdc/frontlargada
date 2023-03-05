
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Axios from '../../../config/config';
import Lista from '../Lista';

export default function Cadastro(){

    const [ dados, setDados ] = useState([1,2,3,4])
    const [transporte, setTransporte] = useState("")

    const filtro = transporte.length > 0
      ? dados.filter((item) => item.Transporte.includes(transporte.toUpperCase()) || item.Nf.includes(transporte.toUpperCase()))
      : dados;

    async function buscarRegistros(){
        Axios.get("/registros").then(response => setDados(response.data)).catch(erro => console.log(erro))
    }

    useEffect(()=>{
        buscarRegistros()

    },[])

    return <div style={{padding:10, marginTop:20}}>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Informe o Transporte</Form.Label>
            <Form.Control value={transporte} onChange={(e)=> setTransporte(e.target.value)} type="number" placeholder="Coloque o transporte" />
        </Form.Group>
        </Form>
        <Lista lista={filtro}/>
    </div>
}