import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent implements OnInit {
  public formulario!: FormGroup;
  camposHabilitados = false;
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombreCompleto: ['', [Validators.required]],
      telefono: ['', []],
      tipoIde:[ '', [Validators.required]],
      identificacion: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      estado: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
    });
  }
  onSubmit() {
    if (this.formulario && this.formulario.valid) {
      // Realiza acciones cuando el formulario es válido
      console.log('Formulario válido:', this.formulario.value);
    } else {
      // Muestra mensajes de error o realiza acciones adicionales si es necesario
      console.log('Formulario inválido. Revise los campos.');
    }
  }

  ngOnInit() {}
}
