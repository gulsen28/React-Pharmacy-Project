
import React, { useState } from 'react'
import { IPharmainfo } from './IPharmainfo';
import { allPharmasi } from './Services';


export default function Pharmacy() {
   const [pharmacies, setpharmacies] = useState<IPharmainfo[]>([])
   const [il, setil] = useState("")
   const [ilce, setilce] = useState("")
   
   async function pharmacy() {
       if(il===""){
        alert("Tüm alanlara değer giriniz..")
       }
       else{
           await allPharmasi(tr(il),tr(ilce)).then(res=>{
               setpharmacies(res.data.data);
           })
           
       }
   }
   function tr(value:string){
    let valuetr="";
       if(value===null){
        valuetr="";
       }
       
       for(let i=0;i<value.length;i++){
           switch (value[i]) {
               case 'ç':
                   valuetr+="c";
                   break;
                case 'ğ':
                    valuetr+="g";
                    break;
                case 'ş':
                    valuetr+="s";
                    break;
                case 'ü':
                    valuetr+="u";
                    break;
                case 'ı':
                    valuetr+="i";
                    break;
                case 'ö':
                    valuetr+="o";
                    break;
               default:
                   valuetr+=value[i];
                   break;
           }
       }
       return valuetr;
   }
  

    return (
        <>
        <div className="row mt-5">
           <div className="col-sm-2 mt-3 mb-3"></div>
           <div className="col-sm-8 mt-3 mb-3">
               <h3 className="mt-3 mb-3">ECZANE ARA</h3>
               <input type="text" onChange={(evt)=>setil(evt.target.value.toLowerCase())} className="form-control mt-3 mb-3"required placeholder="Şehir bilgisini giriniz" id="il"/>
               <input type="text" onChange={(evt)=>setilce(evt.target.value.toLowerCase())} className="form-control mt-3 mb-3" required placeholder="İlçe bilgisini giriniz" id="ilce"/>
               <div className="row" >
                   <div className="col-4">
                   <button className="btn btn-success form-control mt-3 mb-3" onClick={()=>pharmacy()}>SEARCH</button>
                   </div>
           </div>
           <div className="col-sm-2 mt-3 mb-3"></div>

        </div>
        </div>
        <div className="row mt-5 pharlist">
        {
            pharmacies.map((item,index)=>{
                return(
                    <div className="col-sm-4" key={index}>
                        <div className="card mt-3" style={{height:300}}>
                        <div className="card-header text-center"style={{backgroundColor:'cornsilk'}}> <b style={{fontSize:25}}>{item.EczaneAdi.toUpperCase()}</b> </div>
                        <div className="card-body text-center">
                        <p className="card-text"> <b style={{fontStyle:'italic'}}>TELEFON:</b> {item.Telefon} </p>
                        <p className="card-text"> <b style={{fontStyle:'italic'}}>ADRES: </b> {item.Adresi} </p>
                        <p className="card-text"> <b style={{fontStyle:'italic'}}>SEMT: </b> {item.Semt} </p>
                        <p className="card-text"> <b style={{fontStyle:'italic'}}>TARİF: </b> {item.YolTarifi} </p>
                </div>
              </div>
                    </div>
                )
            })
        }
        </div>
        </>
        
    )
}
