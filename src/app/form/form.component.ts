import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit, OnChanges{
  

  @Input() id!: number;
  @Input() formGroup!: FormGroup;
  @Input() valore!: string;
  @Output() aggiungiModificaPersona = new EventEmitter<any>();
  text!:string;

  ngOnInit(): void {
    this.setVisibility();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valore']) {
      this.setVisibility()
    }
  }

  aggiungiModificaUser() {
    this.aggiungiModificaPersona.emit(this.formGroup.value)
  }

  private setVisibility() {
    if(this.valore === "add") {
      this.text = "Aggiungi";
    } else if (this.valore === "update") {
      this.text = "Modifica";
    }
  }
  
}
