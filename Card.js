import React,{useState,useEffect} from "react";
import "./Card.css";
import Deck from "./Deck";
let first="";
let sec="f";
const Card = (props) => 
{
    const [value, setvalue] = useState("nocard");
    const [nombreclase, setnombreclase] =useState("flip-box-inner");
    const [conta, setconta] = useState(0);
    const [apagador, setapagador] = useState(true);
   
const handleclick =()=>{

  if(!props.disabled && props.flipped ===false)
  {
    props.parcomp(props.carta)
  }
}
   

    return(
        <td key={props.llave} className={"nocard"} onClick={ handleclick}>
             
         <div className="flip-box">
  <div className={props.flipped ? "flip-box-innero" : "flip-box-inner"}>
    
    <div className="flip-box-back">
    <figure>
        <img className={"cardimg"} src={props.letra}></img>
        </figure>

    </div>
  </div>
</div>

       
       </td>
    )
}

export default Card;