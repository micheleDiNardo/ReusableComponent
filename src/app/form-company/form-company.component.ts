import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-company',
  // standalone: true,
  // imports: [],
  templateUrl: './form-company.component.html',
  styleUrl: './form-company.component.css'
})
export class FormCompanyComponent {

  @Input() formGroup!: FormGroup;
  @Output() aggiungiCompany= new EventEmitter<any>();

  addCompany() {
    this.aggiungiCompany.emit(this.formGroup.value)
  }

}
