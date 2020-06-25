import { Component, OnInit } from '@angular/core';
import { PaymentOrderService } from "../servicios/utilidades/prueba.service";
import { Router } from "@angular/router";
import { Saldo } from "../interfaces/saldo.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  providers: [ PaymentOrderService ]
})
export class PostPage implements OnInit {

  orders = []
  saldo: any;




  constructor(private orderService: PaymentOrderService, private router: Router) {}

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
  }

  ionViewWillEnter(){
    /*this.orders = this.orderService.getOrders();
    this.saldo = this.orders.reduce((
      acc, 
      cur
      ) => acc +(cur.monto), 0);
    console.log("Total: ", this.saldo)*/
  }

  addNewOrder(){
    this.router.navigate(['/solicitar-pago']);
  }

  handleInput(event){
    
    const query = event.target.value.toLowerCase();
    if(query && query.trim() !== ''){
      this.orders = this.orders.filter(m =>{
        return m.nombre_titular.toLowerCase().indexOf(query.trim().toLowerCase()) > -1;
      })
    }else{
      this.ionViewWillEnter();
    }
  }


  goToHistorial(){
    this.router.navigate(['/order-history'])
  }

  

}
