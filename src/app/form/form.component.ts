import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  // standalone: true,
  // imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input() id!: number;
  @Input() formGroup!: FormGroup;
  @Output() updatePersona = new EventEmitter<any>();

  aggiornaUser() {
    this.updatePersona.emit(this.formGroup.value)
  }

  
}
