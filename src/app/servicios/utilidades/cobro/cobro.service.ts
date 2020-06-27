import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CobroService {

  formModel = this.form.group({
    idUsuarioSolicitante : [0, Validators.required],
    emailPagador : ['', [Validators.required, Validators.email]],
    monto : [0, Validators.required]
  });

  constructor(private http: HttpClient, private form: FormBuilder) { }


  realizarCobro(){
    let header = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token')});
    var body = {
      idUsuarioSolicitante: parseInt(localStorage.getItem('idUsuario')),
      emailPagador: this.formModel.value.emailPagador,
      monto: this.formModel.value.monto
    }
    console.log(body);
    return this.http.post('http://localhost:5000/api/Transfer/realizarcobro',body, {headers: header});
  }
}
