import { Component } from '@angular/core';
import { Company } from './company-model/company.model';

@Component({
  selector: 'app-company',
  // standalone: true,
  // imports: [],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent {

  companies: Company[] = [
    { 
      id: 1, 
      nomeAzienda: 'Tech Solutions', 
      tipologia: 'Software', 
      descrizione: 'Azienda leader nello sviluppo di soluzioni software personalizzate.' 
    },
    { 
      id: 2, 
      nomeAzienda: 'Green Energy', 
      tipologia: 'Energia', 
      descrizione: 'Specializzata in soluzioni energetiche rinnovabili ed ecologiche.' 
    },
    { 
      id: 3, 
      nomeAzienda: 'BuildPro', 
      tipologia: 'Costruzioni', 
      descrizione: 'Esperti in progetti di costruzione e infrastrutture su larga scala.' 
    },
    { 
      id: 4, 
      nomeAzienda: 'HealthFirst', 
      tipologia: 'Sanità', 
      descrizione: 'Fornisce servizi sanitari di alta qualità e tecnologie mediche innovative.' 
    },
    { 
      id: 5, 
      nomeAzienda: 'EduWorld', 
      tipologia: 'Istruzione', 
      descrizione: 'Offre soluzioni educative innovative e programmi di formazione online.' 
    }
  ];
  

}
