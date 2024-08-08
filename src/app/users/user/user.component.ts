import { Component } from '@angular/core';
import { User } from '../user-model/user.model';

@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  columns: string[] = ["Id", "nome", "cognome", "eta"]

  users: User[] = [
    { id: 1, nome: 'Mario', cognome: 'Rossi', eta: 25 },
    { id: 2, nome: 'Luigi', cognome: 'Verdi', eta: 30 },
    { id: 3, nome: 'Giulia', cognome: 'Bianchi', eta: 28 },
    { id: 4, nome: 'Francesca', cognome: 'Neri', eta: 22 },
    { id: 5, nome: 'Alessandro', cognome: 'Esposito', eta: 35 },
    { id: 6, nome: 'Sofia', cognome: 'Conti', eta: 27 },
    { id: 7, nome: 'Marco', cognome: 'De Luca', eta: 33 },
    { id: 8, nome: 'Luca', cognome: 'Galli', eta: 29 },
    { id: 9, nome: 'Valentina', cognome: 'Greco', eta: 26 },
    { id: 10, nome: 'Chiara', cognome: 'Rizzo', eta: 24 }
  ];

}
