import { Injectable } from '@nestjs/common';
import { Empresa } from './Empresa/empresa.model';
import { Localizacao } from './Empresa/localizacao.model';

const emp = {
  id: 3948275,
  name: "Mackenzie",
  estagiarios: [23747,43872,34827],
  logo: "empresas/Mackenzie/logo.png",
  setores: ["Educação"],
  localizacao: {
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
  localizacao: {
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
  localizacao: {
    estado: "SP",
    cidade: "São Paulo",
    bairro: "Tatuapé"
  }
}
const sampleData: Array<Empresa> = [emp, emp2, emp3];

@Injectable()
export class AppService {
  getEmpresas(name: string, location: string): Array<Empresa> {
    const results: Array<Empresa> = []
    console.log(sampleData.length)
    if (!name && !location){
      return sampleData;
    } else {
      if(name){
        name = name.replace(/^"(.+(?="$))"$/, '$1');
        for (let i = 0;i < sampleData.length; i++) {
          console.log(i)
          if (sampleData[i].name.includes(name)){
            results.push(sampleData[i])
          };
        }
      return results;
      }
    }
  }
}