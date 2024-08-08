import { Component, Input } from '@angular/core';
import { User } from '../users/user-model/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { last } from 'rxjs';

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
  text: string = "addUtente";
  showForm:boolean= false;
  id!:number;
  formGroup!: FormGroup;
  valore!:string;

  constructor() {}

  addUser() {
    const newUser = new User();
    let newId = this.assegnaID(this.users);
    newUser.id = newId;
    this.id = newId;
    this.createForm(newUser);
    this.valore = "add";
    this.showForm = true;
  }

  private assegnaID(users: User[]) {
    let idHigher = 0;
    for (let user of users) {
      if (user.id > idHigher) {
        idHigher = user.id;
      }
    }
    return idHigher + 1;
  } 

  deleteUser(i:number) {
    this.users.splice(i,1);
  }

  updateUser(i:number) {
    this.id = i + 1;
    const user = this.users[i];
    this.createForm(user);
    this.valore = "update";
    this.showForm = true;
  }

  private createForm(user:User) {
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
    this.showForm = false;
  }

  aggiungiUser(data:any) {
    let arrayIdExistent = [];
    for (let user of this.users) {
      arrayIdExistent.push(user.id)
    }
    if (!arrayIdExistent.includes(data.id)) {
      this.users.push(data)
      this.showForm = false;
    }else {
      const i = data.id - 1;
      this.users.splice(i, 1, data)
      this.showForm = false;
    }
    
    
  }

}
