import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEmpresas(nome: string, local: string): Array<string> {
    const empresa: string[] = [nome, local];
    return empresa;
  }
}