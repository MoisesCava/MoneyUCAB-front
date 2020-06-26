import { Injectable } from '@angular/core';
import { Usuario } from "../interfaces/usuario.model";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient, private form: FormBuilder) { }

  formModel = this.form.group({
    usuario : ['', Validators.required],
    email : ['', [Validators.required, Validators.email]],
    telefono : ['', Validators.required],
    direccion : ['', Validators.required],
    idUsuario : [0, Validators.required]
  });

  /*
        usuario: '',
      email : '',
      telefono : '',
      direccion: '',
      idUsuario: 0
  */ 





  getDatosUsuario(){
    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    let param = new HttpParams().set('Usuario', localStorage.getItem('email'));
    let url = "http://localhost:5000/api/Dashboard/InformacionPersona";
    return this.http.get(url, {params: param, headers: header});
  }

  registrar(registerForm) {
    
    return this.http.post('http://localhost:5000/api/Authentication/Register', registerForm);
  }

  iniciarSesion(loginForm){
    return this.http.post('http://localhost:5000/api/Authentication/Login', loginForm)
  }

  modificarUsaurio(){
    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    var body = {
      usuario: localStorage.getItem('usuario'),
      email : localStorage.getItem('email'),
      telefono : this.formModel.value.telefono,
      direccion: this.formModel.value.direccion,
      idUsuario: parseInt(localStorage.getItem('idUsuario'))
    };
    console.log(body);
    return this.http.post('http://localhost:5000/api/Authentication/Modification', body , {headers: header});
  }

}
