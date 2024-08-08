import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  // standalone: true,
  // imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  

  @Input() id!: number;
  @Input() formGroup!: FormGroup;
  @Input() valore!: string;
  @Output() modificaPersona = new EventEmitter<any>();
  @Output() aggiungiPersona = new EventEmitter<any>();
  showModifiche:boolean = true;
  showAggiungi:boolean = true;

  ngOnInit(): void {
    this.setVisibility();
  }

  modificaUser() {
    this.modificaPersona.emit(this.formGroup.value)
  }

  aggiungiUser() {
    this.aggiungiPersona.emit(this.formGroup.value);
  }

  private setVisibility() {
    if(this.valore === "add") {
      this.showAggiungi = true;
      this.showModifiche = false;
    } else if (this.valore === "update") {
      this.showModifiche = true;
      this.showAggiungi = false;
    }
  }

  
}
