interface CompanyInterface {
    id:number;
    nomeAzienda:string;
    tipologia:string;
    descrizione:string
}

export class Company implements CompanyInterface {
    id!: number;
    nomeAzienda!: string;
    tipologia!: string;
    descrizione!: string;
}