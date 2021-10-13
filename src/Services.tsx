import axios from "axios";

const service=axios.create({
  baseURL:"/apiv2/pharmacy",
  headers:{
    "Content-Type": "application/json",
    "Authorization": "Bearer ShigzJ7y4ZzfWnOgJDWFerZC3kslYr4nEYk2sRuYgR395WgbFMkj7c1poHXl"
  }
})
export function allPharmasi(il:string,ilce:string){
    const param={
      city:il,
      county:ilce
    }
    return service.get("",{params:param})
        
}