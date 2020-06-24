import { Injectable } from '@angular/core';
import { Usuario } from "../interfaces/usuario.model";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuario : Usuario ={
    nombre : 'nombre',
    apellido : 'apellido',
    correo : 'correo',
    imagen : 'https://image.flaticon.com/icons/png/512/16/16363.png',
    idUsuario : 27042411
  };

  constructor(private http: HttpClient, private form: FormBuilder) { }

  formModel = this.form.group({
    UserName : ['', Validators.required],
    Email : ['', [Validators.required, Validators.email]],
    Passwords : this.form.group({
      Password : ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword : ['', Validators.required]
    })
  });

  getAtributtes() : Usuario{
    return {
      nombre : this.usuario.nombre,
      apellido : this.usuario.apellido,
      correo : this.usuario.correo,
      imagen : this.usuario.imagen,
      idUsuario : this.usuario.idUsuario
    };
  }

  setAtributtes(usuario){
    this.usuario = usuario;
  }



  registrar(registerForm) {

    return this.http.post('http://localhost:5000/api/Authentication/Register', registerForm);
  }

  iniciarSesion(loginForm){
    return this.http.post('http://localhost:5000/api/Authentication/Login', loginForm)
  }

}
