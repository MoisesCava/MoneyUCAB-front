import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../servicios/utilidades/tarjeta/tarjeta.service'
import { CuentaService } from "../../servicios/utilidades/cuenta/cuenta.service";
import { Router } from "@angular/router";
import { Tarjeta } from "../../models/tarjeta.model";
import { Cuenta } from "../../models/cuenta.model";

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.page.html',
  styleUrls: ['./billetera.page.scss'],
})
export class BilleteraPage implements OnInit {

  cuentas: Cuenta[] = [];
  tarjetas: Tarjeta[]= [];
  nombre =  localStorage.getItem('nombreU');
  apellido = localStorage.getItem('apellido');
  banco: {} = {};
  

  constructor(private tarjetaService: TarjetaService, 
    private cuentaService: CuentaService,
    private router: Router) { }

  ngOnInit() {
    console.log(localStorage.getItem('nombreU'))
    this.tarjetaService.obtenerTarjetas().subscribe(
      (data: any) =>{
        this.tarjetas = data;
      }
    );
    this.cuentaService.obtenerCuentas().subscribe(
      (data: any) =>{
        this.banco = data;
        this.cuentas = data;
        console.log(data);
      }
    );
  }



}
