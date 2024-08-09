import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-user-api',
  templateUrl: './form-user-api.component.html',
  styleUrl: './form-user-api.component.css'
})
export class FormUserApiComponent {

  @Input() formGroup!:FormGroup;
  @Output() aggiungiPersona = new EventEmitter<any>();

  aggiungiUser() {
    this.aggiungiPersona.emit(this.formGroup.value)
  }


}
