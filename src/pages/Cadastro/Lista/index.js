
export default function Lista (props){
 const { lista } = props

    return <div style={{marginTop:15}}>{lista?.map(item=> <div style={{backgroundColor: "#92b0e7", margin:4, borderRadius:10}}> 
            <div>{item.NRota}</div>
            <div>{item.Cliente}</div>
            <div>{(parseInt(item.Reentrega) + parseInt(item.LDB) + + parseInt(item.ITB)).toFixed(2) }</div>
        </div>)}</div>



}