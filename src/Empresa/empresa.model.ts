import { Location } from './location.model';

export class Empresa{
    id: number;
    name: string;
    estagiarios: Array<number>;
    logo: string;
    setores: Array<string>;
    location: Location;
}
