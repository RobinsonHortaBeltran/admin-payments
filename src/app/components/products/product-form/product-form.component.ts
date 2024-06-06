import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  public formulario!: FormGroup;
  camposHabilitados = false;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required]],
      color: ['', []],
      referencia: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      fecha: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.formulario && this.formulario.valid) {
      // Realiza acciones cuando el formulario es válido
      console.log('Formulario válido:', this.formulario.value);
    } else {
      // Muestra mensajes de error o realiza acciones adicionales si es necesario
      console.log('Formulario inválido. Revise los campos.');
    }
  }
}
