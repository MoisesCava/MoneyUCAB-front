import { Component, OnInit } from '@angular/core';
import {  UsuariosService  } from "../servicios/usuarios.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private usuario: UsuariosService, private router: Router,  private formBuilder: FormBuilder) 
  { 
    
  }

  ngOnInit() {
  }

  onSubmit(){
    this.usuario.registrar().subscribe(
      (res : any) => {
        console.log(res);
        this.router.navigateByUrl('/post');
      }
    );
  }

}
