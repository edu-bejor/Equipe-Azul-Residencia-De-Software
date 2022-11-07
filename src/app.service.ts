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
    let results: Array<Empresa> = [...sampleData];  // Copia sample para results
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

      let len = results.length;
      let flag: Boolean = false;

      for (let i = 0; i < len; i++) {
        flag = false;
        if (name && results[i].name != name) flag = true;
        else if (obj_location)
        {
          if (obj_location.cidade && results[i].location.cidade != obj_location.cidade)
            flag = true;
          else if (obj_location.bairro && results[i].location.bairro != obj_location.bairro)
            flag = true;
          else if (obj_location.estado && results[i].location.estado != obj_location.estado)
            flag = true;
        }
        if (flag == true) {
          results.splice(i, 1);
          len--; i--;
        }
      }
    }
    return results;
  }
  modifyEmpresa(idEmpresa: string, empresa: Empresa):Object{
    const idEmpresaNum = parseInt(idEmpresa);
    const posIndexEmp = this.getIndexOfEmpresaInArrayByItsId(sampleData, idEmpresaNum);
    if (posIndexEmp !== -1 && empresa.id !== null && typeof empresa.id === "number" && empresa.name !== null && typeof empresa.name === "string"){
      sampleData[posIndexEmp] = empresa;
      return {
        status: 'Empresa alterada.'
      }
    }
    return {
        status: 'Empresa não encontrada ou novos dados inválidos.'
      }
  }

  
  getIndexOfEmpresaInArrayByItsId(arr: Array<Empresa>, id: number):number {
    for(let i = 0; i<arr.length; i++){
      if (arr[i].id === id){
        return i;
      }
    }
    return -1;
  }

}
