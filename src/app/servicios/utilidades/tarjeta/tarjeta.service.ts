import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Tarjeta } from "../../../models/tarjeta.model";
@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  tarjetas: Tarjeta[] = [];

  constructor(private http: HttpClient) { }


  obtenerTarjetas(){

    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    let param = new HttpParams().set('idUsuario', localStorage.getItem('idUsuario'));

    return this.http.get('http://localhost:5000/api/Dashboard/Tarjetas', {params: param, headers: header})
  }




}


