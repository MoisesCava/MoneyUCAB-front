import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {  } from "@angular/common/";
@Injectable({
  providedIn: 'root'
})
export class ReintegroService {

  basic = 'Bearer ' +localStorage.getItem('token');

  suma = parseInt(localStorage.getItem('idUsuario')) + 1;
  common = this.suma.toString(this.suma);


  constructor(private http: HttpClient) { }

  reintegrosActivos(){
    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    let param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'))
    .set('solicitante', this.common)
    return this.http.get('http://66.42.95.58/api/Dashboard/ReintegrosActivos', {params: param, headers: header})
  }

  reintegrosCancelados(){
    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    let param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'))
    .set('solicitante', this.common)
    return this.http.get('http://66.42.95.58/api/Dashboard/ReintegrosCancelados', {params: param, headers: header})
  }

  reintegrosExitosos(){
    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    let param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'))
    .set('solicitante', this.common)
    return this.http.get('http://66.42.95.58/api/Dashboard/ReintegrosExitosos', {params: param, headers: header})
  }

  cancelarReintegro(IdReintegro){
    console.log(IdReintegro);
    console.log(localStorage.getItem('token'));
    
    const header = new HttpHeaders({
      'Authorization': this.basic
    });

    let param = new HttpParams().set('IdReintegro', IdReintegro);


    const options = {
      headers: header,
      params: param
    };

    console.log(options);

    return this.http
    .post('http://66.42.95.58/api/transfer/CancelarReintegro',null, options)
  }




}
