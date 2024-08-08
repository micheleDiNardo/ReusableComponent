import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  // standalone: true,
  // imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit, OnChanges{
  

  @Input() id!: number;
  @Input() formGroup!: FormGroup;
  @Input() valore!: string;
  @Output() modificaPersona = new EventEmitter<any>();
  @Output() aggiungiPersona = new EventEmitter<any>();
  showModifiche:boolean = true;
  showAggiungi:boolean = true;
  text!:string;

  ngOnInit(): void {
    this.setVisibility();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valore']) {
      this.setVisibility()
    }
  }

  modificaUser() {
    this.text = "Modifica"
    this.modificaPersona.emit(this.formGroup.value)
  }

  aggiungiUser() {
    this.text ="Aggiungi"
    this.aggiungiPersona.emit(this.formGroup.value);
  }

  private setVisibility() {
    if(this.valore === "add") {
      this.showAggiungi = true;
      this.showModifiche = false;
      this.text = "Aggiungi";
    } else if (this.valore === "update") {
      this.showModifiche = true;
      this.showAggiungi = false;
      this.text = "Modifica";
    }
  }

  
}
