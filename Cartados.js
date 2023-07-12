import React,{useState, useEffect} from "react";
import "./Cartados.css";
let first="";
let sec="f";
const Cartados = (props) => 
{
const [value, setvalue] = useState("nocartados");
const [nombreclase, setnombreclase] = useState("flip-box-inner");
const [apagador, setapagador] = useState(true);
const [conta, setconta] = useState(0);


const handleclick=()=>{

 
  if(!props.disabled && props.flipped ===false)
  {
    props.parcompdos(props.carta)
  }
  
}

    return(
        <td key={props.llave} className={"nocartados"} onClick={  handleclick}>
            
        <div className="flip-box">
 <div className={props.flipped ? "flip-box-innero" : "flip-box-inner"}>
   
   <div className="flip-box-back">
   <figure>
       <img className={"cartadosimg"} src={props.suit}></img>
       </figure>

   </div>
 </div>
</div>

      
      </td>
    )
}

export default Cartados;