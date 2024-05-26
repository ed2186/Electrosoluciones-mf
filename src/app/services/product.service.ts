import { environment } from 'src/environments/environment';
import { Product } from './../model/Product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private url: string = environment.urlElectrosoluciones;

    constructor(private httpCliente: HttpClient) { }

    obtenerTodosProductos(): Observable<Product[]> {
        return this.httpCliente.get<Product[]>(`${this.url}producto/obtenerTodos`);
    }

    crearProducto(product:Product) : Observable<any> {
        return this.httpCliente.post<any>(`${this.url}producto/agregarProducto`,product);
    }

    actualizarProducto(product:Product) : Observable<any> {
        return this.httpCliente.put<any>(`${this.url}producto/actualizarProducto`,product);
    }

    eliminarProducto(id:number) : Observable<any> {
        return this.httpCliente.delete<any>(`${this.url}producto/eliminarProducto/${id}`);

    }

}
