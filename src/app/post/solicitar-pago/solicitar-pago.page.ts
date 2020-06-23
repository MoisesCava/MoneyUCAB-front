import { Component, OnInit } from '@angular/core';
import { PaymentOrderService } from '../../servicios/utilidades/prueba.service'
import { FormsModule } from '@angular/forms';
import { MenuController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar-pago',
  templateUrl: './solicitar-pago.page.html',
  styleUrls: ['./solicitar-pago.page.scss'],
})
export class SolicitarPagoPage implements OnInit {

  constructor(private paymentOrderService: PaymentOrderService, private router: Router, private formModulo: FormsModule, private menuController: MenuController) { }

  ngOnInit() {
  }

  saveNewOrder(nombre_titular,monto,imageURL,comments){
    this.paymentOrderService.addOrder(nombre_titular.value,parseInt(monto.value),imageURL.value,comments.value);
    this.router.navigate(['/post']);
  }

}
