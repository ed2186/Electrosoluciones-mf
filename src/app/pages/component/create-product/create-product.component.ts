import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  providers:[MessageService]
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup= new FormGroup({});

  uploadedFiles: any[] = [];

  constructor(private fb: FormBuilder,public config:DynamicDialogConfig, public ref:DynamicDialogRef,private messageService: MessageService) {

  }

  ngOnInit(): void {
    console.log(this.config.data)

    if(this.config.data.data){
      this.productForm = this.fb.group({
        id: [this.config.data.data.id, Validators.required],
        nombre: [this.config.data.data.nombre, Validators.required],
        descripcion: [this.config.data.data.descripcion],
        unidad : [this.config.data.data.unidad,Validators.required],
        imagen: [this.config.data.data.imagen],
        precio: [this.config.data.data.precio, [Validators.required, Validators.min(0)]],
        cantidad: [this.config.data.data.cantidad, [Validators.required, Validators.min(0)]],
      });
    }else{
      this.productForm = this.fb.group({
        nombre: ['', Validators.required],
        descripcion: [''],
        imagen: [null],
        unidad : ['',Validators.required],
        precio: [0, [Validators.required, Validators.min(0)]],
        cantidad: [0, [Validators.required, Validators.min(0)]],
      });
    }

    this.productForm.get('imagen')?.disable();

    // console.log(this.productForm)
  }


  onSubmit(): void {
    console.log(this.productForm);

    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.ref.close(this.productForm.value);
    } else {
      console.log('El formulario es invalido');
    }
  }


  onUpload(event:UploadEvent) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    this.productForm.get('imagen')?.setValue(this.uploadedFiles[0]);
    this.productForm.get('imagen')?.updateValueAndValidity();
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    console.log(this.productForm)
}

}
