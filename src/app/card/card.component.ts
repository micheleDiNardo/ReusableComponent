import { Component, Input } from '@angular/core';
import { Company } from '../company/company-model/company.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card',
  // standalone: true,
  // imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() companies!: Company[];
  text: string = "addUtente";
  showForm:boolean= false;
  id!:number;
  formGroup!: FormGroup;

  constructor() {}

  addCompany() {
    const newCompany = new Company();
    let newId = this.assegnaID(this.companies);
    newCompany.id = newId;
    this.id = newId;
    this.createForm(newCompany);
    this.showForm = true;
  }

  private assegnaID(companies: Company[]) {
    let idHigher = 0;
    for (let company of companies) {
      if (company.id > idHigher) {
        idHigher = company.id;
      }
    }
    return idHigher + 1;
  } 

  deleteCompany(i:number) {
    this.companies.splice(i,1);
  }

  private createForm(company:Company) {
    this.formGroup = new FormGroup({
      id: new FormControl(company ? company.id : null, [Validators.required]),
      nomeAzienda: new FormControl(company ? company.nomeAzienda : "", [Validators.required]),
      tipologia: new FormControl(company ? company.tipologia : "", [Validators.required]),
      descrizione: new FormControl(company? company.descrizione : "", [Validators.required])
    })
  }

  aggiungiCompany(data:any) {
    this.companies.push(data)
    this.showForm = false;
  }


}
