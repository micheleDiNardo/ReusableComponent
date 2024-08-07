interface UserInterface {
    id:number;
    nome:string;
    cognome:string;
    eta:number;
}

export class User implements UserInterface {
    id!: number;
    nome!: string;
    cognome!: string;
    eta!: number;
}