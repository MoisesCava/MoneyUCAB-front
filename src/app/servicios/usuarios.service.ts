import { Injectable } from '@angular/core';
import { Usuario } from "../interfaces/usuario.model";
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

  constructor(http: HttpClient) { }

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

  putDatosUsuario(){
    
  }
}
