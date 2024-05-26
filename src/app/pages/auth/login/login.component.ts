import { Component, OnInit} from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logo: string='assets/logos/electrosoluciones.png';
  homePath:string='../home/home.component.html';

   email=new FormControl('',[Validators.required, Validators.email]);
   password=new FormControl('' ,[Validators.required]);

  constructor( private route:Router) {

   }


   Entrar(){


    if(this.email.value==="admin@gmail.com" && this.password.value=='123' ){
      this.route.navigate(['/Admin']);
    }


  }

  ngOnInit(): void {
  }


}
