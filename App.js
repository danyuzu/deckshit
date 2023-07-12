import logo from './logo.svg';
import './App.css';
import Deck from './Deck';
import React,{ useState, useMemo,useEffect, useCallback } from "react"
import Card from "./Card"
import   "./Deck.css";
import Cartados from "./Cartados";
import img1 from "./imgs/img1.jpeg";
import img2 from "./imgs/img2.jpeg";
import img3 from "./imgs/img3.jpeg";
import img4 from "./imgs/img4.jpeg";
import img5 from "./imgs/img5.jpeg";
import img6 from "./imgs/img6.jpeg";
import img7 from "./imgs/img7.jpeg";
import img8 from "./imgs/img8.jpeg";
import img9 from "./imgs/img9.jpeg";
import img10 from "./imgs/img10.jpg";
import img11 from "./imgs/img11.jpeg";
import img12 from "./imgs/img12.jpeg";
import img13 from "./imgs/img13.png";
import img14 from "./imgs/img14.jpeg";
import img15 from "./imgs/img15.png";
import img16 from "./imgs/img16.jpeg";
import img17 from "./imgs/img17.png";
import img18 from "./imgs/img18.jpeg";
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
let firstname="s";
let secondname="";

function App ()  {
  const [par, setpar] =useState(0);
  const [regresar, setregresar] = useState(false);
  const [disabled, setdisable]= useState(false);
  

 
      
  
  const  [pairone,sepairone]= useState([{img:img1,
  parname:"paruno",matched:false},
  {img:img2,
  parname:"pardos" ,matched:false},
 { img:img3,
parname:"partres",matched:false}
,{img:img4,
parname:"parcuatro",matched:false},
{img:img5,
parname:"parcinco",matched:false},
{img:img6,
parname:"parseis",matched:false},
{img:img7,
parname:"parsiete",matched:false},
{img:img8,
parname:"parocho",matched:false},
{img:img9,
parname:"parnueve",matched:false},
{img:img10,
parname:"pardiez",matched:false},
{img:img11,
parname:'paronce',matched:false},
{img:img12,
parname:"pardoce",matched:false},
{img:img13,
parname:"partrece",matched:false},
{img:img14,
parname:"parcatorce",matched:false},
{img:img15,
parname:"parquince",matched:false},
{img:img16,
parname:"pardieciseis",matched:false},
{img:img17,
parname:"pardiecisiete",matched:false},
{ img:img18,
parname:"pardieciocho",matched:false}])

   const [pairtwo, setpairtwo] = useState([{img:img1,
    parname:"paruno",matched:false},
    {img:img2,
    parname:"pardos" ,matched:false},
   { img:img3,
  parname:"partres",matched:false}
  ,{img:img4,
  parname:"parcuatro",matched:false},
  {img:img5,
  parname:"parcinco",matched:false},
  {img:img6,
  parname:"parseis",matched:false},
  {img:img7,
  parname:"parsiete",matched:false},
  {img:img8,
  parname:"parocho",matched:false},
  {img:img9,
  parname:"parnueve",matched:false},
  {img:img10,
  parname:"pardiez",matched:false},
  {img:img11,
  parname:'paronce',matched:false},
  {img:img12,
  parname:"pardoce",matched:false},
  {img:img13,
  parname:"partrece",matched:false},
  {img:img14,
  parname:"parcatorce",matched:false},
  {img:img15,
  parname:"parquince",matched:false},
  {img:img16,
  parname:"pardieciseis",matched:false},
  {img:img17,
  parname:"pardiecisiete",matched:false},
  { img:img18,
  parname:"pardieciocho",matched:false}])

  const [choiceone, setchoiceone] = useState(null);
  const [choicetwo, setchoicetwo] = useState(null);
   const [turns, setturns]= useState(0);
  const shuffle =(array) =>
{
for(let i = array.length -1; i >0; i--)
{
let j = Math.floor(Math.random() * (i + 1));
var temp = array[i];
array[i] = array[j];
array[j] = temp;
}
return array;
}

  const [shuffledCards,setshuffledcards] =useState( React.useMemo(() => {

 
    return shuffle(pairone);
  }, []))
  
  const [shuffledCardos,setshuffledcardos] =useState( React.useMemo(() => {
   
    return shuffle(pairtwo);
  }, []))


  useEffect(()=>
  {
  
    
    if(choiceone && choicetwo)
    {  setdisable(true)
       if(choiceone.parname === choicetwo.parname)
       {
              setshuffledcards(prev => {
                return prev.map(card => {
                  if(card.parname ===choiceone.parname){
                    return {...card, matched: true}
                  }else{
                    return card
                  }
                })
              }) 
              setshuffledcardos(prev => {
                return prev.map(card => {
                  if(card.parname ===choiceone.parname){
                    return {...card, matched: true}
                  }else{
                    return card
                  }
                })
              }) 

        resetthesebitches()
        setturns(p => p +1)
       }
       else 
       {
        setTimeout(()=>{
          resetthesebitches()
        },1000)
        
       }
    }
      
   
  },[choiceone, choicetwo])




const Match =(card) =>
{

choiceone ? setchoicetwo(card) : setchoiceone(card);

 return console.log(card)
       
}

const resetthesebitches =()=>
{
  setchoiceone(null);
  setchoicetwo(null);
  setdisable(false)
}



 
// const shuffledCardos = React.useMemo(() => {
 
//   return shuffle(pairtwo);
// }, [])



  return (
    <div className="App">
   
    <p className='text-sm mb-1 capitalize decoration-red-800 decoration-wavy'>que esta psandaa pa</p>
    <p className='text-2xl mb-1 truncate  underline-offset-4'>que esta psandaa pa</p>
 
    <h1 className="     bg-newcolor-100 mb-1   text-black tag  text-xs sm:text-base ">MATCH GAME</h1>

<table className="tabla"> 

       
 <tr> 
 { 
     shuffledCards.map((carta) =>
 <Card
letra={carta.img} 
llave={carta.parname}
carta={carta}
parcomp={Match}
flipped={carta ===choiceone || carta=== choicetwo || carta.matched }
disabled={disabled}
/>

 
)} 
 </tr>

      
       <tr>

 {shuffledCardos.map((suits) => 
 <Cartados
     suit={suits.img}
     llavedos={suits.parname}
     parcompdos={Match}
    carta={suits}
    flipped={suits ===choiceone || suits=== choicetwo || suits.matched}
    disabled={disabled}
 />
 )}
 </tr>
 </table>




    </div>
  );
}

export default App;
