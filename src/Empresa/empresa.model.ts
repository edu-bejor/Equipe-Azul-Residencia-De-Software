import { Localizacao } from './localizacao.model';

export class Empresa{
    id: number;
    name: string;
    estagiarios: Array<number>;
    logo: string;
    setores: Array<string>;
    localizacao: Localizacao;
}