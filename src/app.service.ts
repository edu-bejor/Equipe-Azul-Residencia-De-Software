import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEmpresas(nome: string, location: string): string[] {
    const empresa: string[] = [nome, location];
    return empresa;
  }
}
