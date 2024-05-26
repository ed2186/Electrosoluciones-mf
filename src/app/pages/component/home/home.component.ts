import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  visibleSid:boolean=false;
  admin:boolean=false;

  // fondo del boton
  fondoBtn:string='assets/imagenes/Fondo.jpg';
  fotoHome:string='assets/imagenes/home-configuracion.jpg';

  constructor(private route:Router) { }

  ngOnInit(): void {

    if(this.route.url==="/Admin"){
      this.admin=true;
    }
  }
  mostrarSidebar(visibleSid:boolean){

    this.visibleSid=visibleSid;
  }

  configurarSpool(){
    this.route.navigate(['/Admin/configurarSpool']);
  }
  crearSpool(){
    this.route.navigate(['/Facturacion/crearSpool']);
  }


}
