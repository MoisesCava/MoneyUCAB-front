import { Component, OnInit } from '@angular/core';
import { PaymentOrderService } from "../servicios/utilidades/prueba.service";
import { Router } from "@angular/router";
import { Saldo } from "../interfaces/saldo.model";
import { UsuariosService } from '../servicios/usuarios.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  providers: [ PaymentOrderService ]
})
export class PostPage implements OnInit {

  orders = []
  saldo: any;


  constructor(private orderService: PaymentOrderService, private router: Router, private usuarioService: UsuariosService) {}

  ngOnInit() {
    this.orderService.saldoActual()
    .subscribe
    (
      data =>
      {
        this.saldo = data;
      },
      err => {
        console.log(err.message);
      }
      )

      this.usuarioService.getDatosUsuario()
      .subscribe(
      (data: any) =>
      {
        localStorage.setItem('idUsuario', data.result.idUsuario);
        localStorage.setItem('usuario', data.result.usuario);
        localStorage.setItem('telefono', data.result.telefono);
        localStorage.setItem('direccion', data.result.direccion);
        console.log('El id de usuario es:', localStorage.getItem('idUsuario') )
        console.log('El nombre es:', localStorage.getItem('usuario') )
        console.log('El telefono es:', localStorage.getItem('telefono') )
        console.log('La direccion es:', localStorage.getItem('direccion') )
        console.log(data);
        },
        err => {
          console.log(err.message);
        }
      )
  }

  ionViewWillEnter(){

  }

  

}
