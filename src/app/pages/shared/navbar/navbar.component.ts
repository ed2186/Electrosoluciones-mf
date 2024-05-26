import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logoRuta:string='assets/logos/electrosoluciones.png';
  correo:string="Iniciar sesión";
  rutaCorreo:string="/login";

  logeado:boolean=false;
  btnmenu:boolean=false;
  facturacion:boolean=true;
  admin:boolean=true;

  @Output() mostrarSidebar = new EventEmitter<boolean>();
  @Output() mostrarOpcion = new EventEmitter<boolean>();

  constructor( private route:Router) {
   // this.RutaCorreo=this.route.url;
  }

  // mostrarSid(){
  //   this.btnmenu=!this.btnmenu;
  //   this.mostrarSidebar.emit(this.btnmenu);
  // }
  ngOnInit(): void {



    if(this.route.url==="/Admin" || this.route.url==="/Admin/configurarSpool"
        || this.route.url==="/Admin/configurarSpool/actualizar"
        || this.route.url==="/Admin/configurarSpool/crear"
        || this.route.url==="/Admin/configurarSpool/eliminar")
    {
              this.correo="admin@gmail.com";
              this.rutaCorreo=this.route.url;
              this.logeado=true;
              this.mostrarOpcion.emit(this.admin);
              console.log(this.logeado)
    }

  }


}
