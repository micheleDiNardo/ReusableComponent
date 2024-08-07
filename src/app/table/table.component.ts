import { Component, Input } from '@angular/core';
import { User } from '../users/user-model/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  // standalone: true,
  // imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() columns: string[] = []; 
  @Input() users: User[] = [];
  @Input() newUser!: User;
  text: string = "addUtente";
  showForm:boolean= false;
  id!:number;
  formGroup!: FormGroup;

  constructor() {}

  addUser() {
    this.users.push(this.newUser)
  }

  deleteUser(i:number) {
    this.users.splice(i,1);
  }

  updateUser(i:number) {
    this.id = i + 1;
    const user = this.users[i];
    this.createForm(user);
    this.showForm = true;
  }

  createForm(user:User) {
    this.formGroup = new FormGroup({
      id: new FormControl(user ? user.id : null, [Validators.required]),
      nome: new FormControl(user ? user.nome : "", [Validators.required]),
      cognome: new FormControl(user ? user.cognome : "", [Validators.required]),
      eta: new FormControl(user ? user.eta : null, [Validators.required])
    })
  }

  aggiornaUser(data:any) {
    const i = data.id - 1;
    this.users.splice(i, 1, data)
  }

}
