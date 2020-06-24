import { Component, OnInit } from '@angular/core';
import {  UsuariosService  } from "../servicios/usuarios.service";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formModel = {
    UserName: '',
    Email : '',
    Password : ''
  }

  constructor(private usuario: UsuariosService, private router: Router,  private formBuilder: FormBuilder) 
  { 
    
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.usuario.registrar(form.value).subscribe(
      (res:any) => {
        console.log(res); // res JSON
        this.router.navigateByUrl('/post');
      },
      err => {
        console.log(err); // error JSON
      }
    );
  }

}
