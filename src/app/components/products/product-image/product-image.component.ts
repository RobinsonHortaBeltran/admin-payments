import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css'],
})
export class ProductImageComponent implements OnInit {
  formularioInvalido: boolean = true;
  imagePreview: string | null = null;

  config: any = {
    url: '/api/upload',
    maxFiles: 1,
  };
  constructor() {}

  ngOnInit() {}

  onDrop(event: any) {
    if (event.addedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(event.addedFiles[0]);
    }
  }

  onConfirm() {
    // Agrega lógica para confirmar aquí
    console.log('Imagen confirmada:', this.imagePreview);
  }

  onClear() {
    this.imagePreview = null;
  }
}
