import { Injectable } from '@nestjs/common';
import { Empresa } from './Empresa/empresa.model';
import { Location } from './Empresa/location.model';

const emp = {
  id: 3948275,
  name: "Mackenzie",
  estagiarios: [23747,43872,34827],
  logo: "empresas/Mackenzie/logo.png",
  setores: ["Educação"],
  location: {
    estado: "SP",
    cidade: "São Paulo",
    bairro: "Higienópolis"
  }
}
const emp2 = {
  id: 9328392,
  name: "Luci Tech",
  estagiarios: [23749,43873,34829],
  logo: "empresas/LuciTech/logo.png",
  setores: ["Tecnologia", "Desenvolvimento RPA"], 
  location: {
    estado: "SP",
    cidade: "São Paulo",
    bairro: "Higienópolis"
  }
}

const emp3 = {
  id: 2394350,
  name: "André Mineradora",
  estagiarios: [23743,43870,34829],
  logo: "empresas/AndreMineradora/logo.png",
  setores: ["Mineração"],
  location: {
    estado: "MG",
    cidade: "São Paulo",
    bairro: "Tatuapé"
  }
}
const sampleData: Array<Empresa> = [emp, emp2, emp3];

@Injectable()
export class AppService {
  getEmpresas(name: string, location: string): Array<Empresa> {
    let results: Array<Empresa> = [];
    console.log(sampleData.length)
    if (!name && !location){
      return sampleData;
    }
    else {
      if (name)
        name = name.replace(/^"(.+(?="$))"$/, '$1');
      if (location) {
        location = location.replace(/^"(.+(?="$))"$/, '$1');
        var obj_location = JSON.parse(location); // transforma location em objeto
      }
      results = sampleData;
      let len = results.length;

      for (let i = 0; i < len; i++) {
        if (name && results[i].name != name) results.splice(i, 1);
        else if (obj_location)
          if (obj_location.cidade && results[i].location.cidade != obj_location.cidade)
            results.splice(i, 1);
          else if (obj_location.bairro && results[i].location.bairro != obj_location.bairro)
            results.splice(i, 1);
          else if (obj_location.estado && results[i].location.estado != obj_location.estado)
            results.splice(i, 1);
      }
    }
    return results;
    // else {
    //   if(name){
    //     name = name.replace(/^"(.+(?="$))"$/, '$1');
    //     for (let i = 0;i < sampleData.length; i++) {
    //       console.log(i)
    //       if (sampleData[i].name.includes(name)){
    //         results.push(sampleData[i])
    //       }
    //     }
    //     if(location){
    //       location = location.replace(/^"(.+(?="$))"$/, '$1');
    //       console.log(location);
    //       var json_location = JSON.parse(location);
    //       for (let i = 0; i < results.length; i++){
    //         console.log(i);
    //         if (results[i].location.estado.includes(json_location.estado)){
    //           results.push(results[i]);
    //         }
    //       }
    //     }
    //   } else {
    //     if(location){
    //       location = location.replace(/^"(.+(?="$))"$/, '$1');
    //       console.log(location);
    //       var json_location = JSON.parse(location);
    //       for (let i = 0; i < sampleData.length; i++){
    //         console.log(i);
    //         if (sampleData[i].location.estado.includes(json_location.estado)){
    //           results.push(sampleData[i]);
    //         }
    //         // falta definir para cidade e bairro
    //       }
    //     }
    //   }
    //   return results;
    // }
  }
}

