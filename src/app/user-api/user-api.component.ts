import { Component, OnInit } from '@angular/core';
import { Data, PaginatedUsers, UserApi, UserCreatedRequest } from './user-api-model/user-api.model';
import { UserApiService } from './user-api-services/user-api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-api',
  templateUrl: './user-api.component.html',
  styleUrl: './user-api.component.css'
})
export class UserApiComponent implements OnInit {

  paginatedUsers!: PaginatedUsers;
  users: Data[] = [];
  numPag: number = 1;
  totElementi!: number;
  showForm:boolean = false;
  showCard:boolean = true;
  formGroup!: FormGroup;
  currentId?: number;
  currentUserName!: string;
  textAggiungiOrModifica: string = "Aggiungi";
  title!: string;

  constructor(
    private userApiService: UserApiService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadUsers();
    this.createForm();

  }

  loadUsers() {
    this.userApiService.getUsers(this.numPag)
      .subscribe((data) => {
        this.paginatedUsers = data;
        this.totElementi = this.paginatedUsers.per_page
        this.users = data.data;
      });
  }

  setNumPag(numPag: number) {
    this.numPag = numPag;
    this.loadUsers();
  }

  goToDetail(id:number) {
    this.router.navigate(['/users-api', id]);
  }

  deleteUserById(id: number) {
    const isConfirmed = confirm("Sei sicuro di voler eliminare questo utente?");
    
    if (isConfirmed) {
      this.userApiService.deleteUserById(id).subscribe(() => {
        console.log('Utente eliminato con successo');
      }, (error) => {
        console.error('Errore durante l\'eliminazione dell\'utente', error);
      });
    }
  }

  setVisibility() {
    this.textAggiungiOrModifica = "Aggiungi"
    this.title = "Aggiungi"
    this.formGroup.patchValue({
      name: ""
    });
    if(this.showForm === true) {
      this.showForm = false;
      this.showCard = true;
    }else {
      this.showForm = true;
      this.showCard = false;
    }
  }

  private createForm() {
    this.formGroup = new FormGroup({
      name: new FormControl("", [Validators.required]),
      job: new FormControl("", [Validators.required])
    })
  }

  aggiungiModificaUser(data: any) {
    let body = new UserCreatedRequest();
    body.name = data.name;
    body.job = data.job;
    if (this.currentId !== undefined) {
      this.userApiService.updateUser(body, this.currentId).subscribe((data) =>  { alert('Utente modificato con successo!'), this.currentId = undefined })
    }else {
      this.userApiService.addUser(body).subscribe(() =>  alert('Utente aggiunto con successo!'))
    }
  
    this.showForm = false;
    this.formGroup.reset()
    this.showCard = true;
  }

  saveIdToUpdate(id:number) {
    this.currentId = id;
    this.userApiService.getUserById(id).subscribe((data) => { 
      this.currentUserName = data.data.first_name;
      this.formGroup.patchValue({
        name: this.currentUserName
      });
    })
    this.textAggiungiOrModifica = "Modifica"
    this.title = "Modifica User di id: " + id;

  }
}
