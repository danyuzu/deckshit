
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

let k= 0;
 //const suits = ["T", "H", "O", "T", "T"]
 let firstname="s";
 let secondname="";
 const Deck =(props)=>
{

    const [par, setpar] =useState(0);
    const [regresar, setregresar] = useState(false);

   
        useEffect(()=>
        {
            if(par ==2)
            {   
                setTimeout(() => {
                   setpar(0)
                if(firstname !== secondname)
                {
                    console.log("fase dos")
                        setregresar(true);
                     console.log(firstname)
                     console.log(secondname)
                 }
                else if(firstname == secondname )
                {  setregresar(false);
                    console.log("fase x")
                    console.log(firstname)
                     console.log(secondname)
                     console.log("QUE ROLLO PUESS")
                     pairone.filter(p=> p.parname=="partres")
                }
               
            }, 100);
                  }  
           console.log(par)
           console.log(regresar)
        },[par])
    
    const  pairone= [{img:img1,
    parname:"paruno"},
    {img:img2,
    parname:"pardos"},
   { img:img3,
parname:"partres"}
,{img:img4,
parname:"parcuatro"},
{img:img5,
parname:"parcinco"},
{img:img6,
parname:"parseis"},
{img:img7,
parname:"parsiete"},
{img:img8,
parname:"parocho"},
{img:img9,
parname:"parnueve"},
{img:img10,
parname:"pardiez"},
{img:img11,
parname:'paronce'},
{img:img12,
parname:"pardoce"},
{img:img13,
parname:"partrece"},
{img:img14,
parname:"parcatorce"},
{img:img15,
parname:"parquince"},
{img:img16,
parname:"pardieciseis"},
{img:img17,
parname:"pardiecisiete"},
{ img:img18,
parname:"pardieciocho"}];

     const [pairtwo, setpairtwo] = useState([{img:img1,
        parname:"paruno"},
        {img:img2,
        parname:"pardos"},
       {  parname:"partres"
   }
    ,{img:img4,
    parname:"parcuatro"},
    {img:img5,
    parname:"parcinco"},
    {img:img6,
    parname:"parseis"},
    {img:img7,
    parname:"parsiete"},
    {img:img8,
    parname:"parocho"},
    {img:img9,
    parname:"parnueve"},
    {img:img10,
    parname:"pardiez"},
    {img:img11,
    parname:'paronce'},
    {img:img12,
    parname:"pardoce"},
    {img:img13,
    parname:"partrece"},
    {img:img14,
    parname:"parcatorce"},
    {img:img15,
    parname:"parquince"},
    {img:img16,
    parname:"pardieciseis"},
    {img:img17,
    parname:"pardiecisiete"},
    { img:img18,
    parname:"pardieciocho"}])
     

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
const Eliminate =(e)=>
{
   setpairtwo(prev=>prev.filter((p)=> p.parname !==e))


}

const Match =(e, b,c) =>
{
                setpar(p => p + e )
                if(par ==0)
                {
                firstname= b;
                console.log(b)
                }
                else if(par ==1)
                {  
                    secondname=b;
                    console.log(b)
                }
                    if(firstname==secondname)
                    {
                       
                    }
            
             
                if(c==false)
                {
                     setregresar(false)
                }
            }

const shuffledCards = React.useMemo(() => {
   
    return shuffle(pairone);
  }, [])
  const shuffledCardos = React.useMemo(() => {
   
    return shuffle(pairtwo);
  }, [])


    return(
        <div className="cardcontainer">

           <table className="tabla">
           
            <tr>
            { 
                shuffledCards.map((carta) =>
            <Card
          letra={carta.img}
         llave={carta.parname}
          parcomp={Match}
         volteo={regresar}
         first={firstname}
         second={secondname}
    
        />
        
            
        )} 
            </tr>
       
                 
                  <tr>

            {shuffledCardos.map((suits) => 
            <Cartados
                suit={suits.img}
                llave={suits.parname}
                parcompdos={Match}
                volteo={regresar}
         valor={par}
         first={firstname}
         second={secondname}
            />
            )}
            </tr>
            </table>
            </div>
          
        
       
)

             }
export default Deck;