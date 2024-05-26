import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';
import { CreateProductComponent } from '../create-product/create-product.component';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss'],
  providers: [DialogService,MessageService]
})
export class ViewProductsComponent implements OnInit {

  visibleSid:boolean=false;
  products!: Product[];
  ref: DynamicDialogRef | undefined;

  constructor(
    private productService: ProductService,
    public dialogService:DialogService) {}

  ngOnInit() {
        this.obtenerProductos();
  }

  obtenerProductos(){
    this.productService.obtenerTodosProductos().subscribe((data) => {
      console.log(data)
        this.products = data;
    });
  }

  getSeverity(status: string): string {
      switch (status) {
          case 'En existencia':
              return 'success';
          case 'Baja existencia':
              return 'warning';
          case 'Sin existencia':
              return 'danger';
      }
      return '';
  }

  mostrarSidebar(visibleSid:boolean){

    this.visibleSid=visibleSid;
  }

  editarProducto(producto:Product){
    // console.log(producto);

    this.ref = this.dialogService.open(CreateProductComponent, {
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      data:{data:producto,title:'Editar producto'}
  });

  this.ref.onClose.subscribe((product: Product) => {
    if (product) {
      console.log(product)

      this.actualizarProducto(product);
    }
});

  }

  crearProducto() {
    this.ref = this.dialogService.open(CreateProductComponent, {
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      data: { title: 'Crear Producto' }
    });

    this.ref.onClose.subscribe((product: Product) => {
      if (product) {
        this.crearProductoService(product);
      }
    });
  }

  crearProductoService(product:Product){
    // console.log(product);
    this.productService.crearProducto(product).subscribe((msj:any)=>{
      console.log(msj)
    });
    this.obtenerProductos();
  }

  actualizarProducto(producto:Product){
    this.productService.actualizarProducto(producto).subscribe((msj: any)=>{
      console.log(msj);
    });
    this.obtenerProductos();

  }

  eliminarProducto(producto:Product){
    console.log("eliminar producto: ", producto.id)
    this.productService.eliminarProducto(producto.id).subscribe((msj:any)=>{
      console.log(msj)
    })
  }
}
