import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Tarjeta } from "../../../models/tarjeta.model";
import { Reintegro } from 'src/app/models/reintegro.model';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  tarjetas: Tarjeta[] = [];

  reintegro: Reintegro;

  

  constructor(private http: HttpClient, private form: FormBuilder) { }

  formModel = this.form.group({
    idUsuarioSolicitante : [0, Validators.required],
    idMedioPaga : [0, Validators.required],
    monto : [0, Validators.required],
    idOperacion : [0, Validators.required]
  });


  obtenerTarjetas(){

    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    let param = new HttpParams().set('IdUsuario', localStorage.getItem('idUsuario'));

    return this.http.get('http://66.42.95.58/api/Dashboard/Tarjetas', {params: param, headers: header})
  }

  crearReintegro(reintegroactivo){
    this.reintegro = reintegroactivo;
    console.log(this.reintegro);
  }

  tarjetaReintegro(){
    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    console.log(this.reintegro);
    let monto = this.reintegro.monto;
    var body = {
      idUsuarioReceptor: this.reintegro.idUsuarioSolicitante,
      idMedioPaga: parseInt(this.formModel.value.idMedioPaga),
      monto: Number(monto),
      idOperacion: this.reintegro.idReintegro
    };

    console.log(body);

    return this.http.post('http://66.42.95.58/api/transfer/RealizarReintegroTarjeta', body, {headers: header})
  }


  cuentaReintegro(){
    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    console.log(this.reintegro);
    let monto = this.reintegro.monto;
    var body = {
      idUsuarioReceptor: this.reintegro.idUsuarioSolicitante,
      idMedioPaga: parseInt(this.formModel.value.idMedioPaga),
      monto: Number(monto),
      idOperacion: this.reintegro.idReintegro
    };

    console.log(body);

    return this.http.post('http://66.42.95.58/api/transfer/RealizarReintegroCuenta', body, {headers: header})
  }

  monederoReintegro(){
    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    console.log(this.reintegro);
    let monto = this.reintegro.monto;
    var body = {
      idUsuarioReceptor: this.reintegro.idUsuarioSolicitante,
      idMedioPaga: parseInt(localStorage.getItem('idUsuario')),
      monto: Number(monto),
      idOperacion: this.reintegro.idReintegro
    };

    console.log(body);

    return this.http.post('http://66.42.95.58/api/transfer/RealizarReintegroMonedero', body, {headers: header})
  }

  
}


