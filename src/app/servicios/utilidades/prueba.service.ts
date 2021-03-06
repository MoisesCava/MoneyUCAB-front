import { Injectable } from '@angular/core';
import { Prueba } from "../../interfaces/prueba.model";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentOrderService {

  private orders: Prueba[] = [
    {
      id: '1',
      nombre_titular: 'Carl Sagan',
      monto: 1000,
      imageURL: 'https://www.bbvaopenmind.com/wp-content/uploads/2018/02/Sagan-1.jpg',
      comments: ['Orden de pago por','Motor raptor']
    },
    {
      id: '2',
      nombre_titular: 'Benito Antonio Martínez Ocasio',
      monto: 2000,
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPGWADYlheQjpLX6XFckRowkRfr9tXphTH_4lQiCQ0FCJueYsT&usqp=CAU',
      comments: ['Orden de pago por','DIADORA Tokyo Azul Royal']
    },
    {
      id: '3',
      nombre_titular: 'Prueba',
      monto: 3000,
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPGWADYlheQjpLX6XFckRowkRfr9tXphTH_4lQiCQ0FCJueYsT&usqp=CAU',
      comments: []
    }
  ]

  url = "http://localhost:5000/api/saldo/Consultar?id="

  constructor(private http: HttpClient) { }

  getOrders(){
    return [...this.orders]
  }

  getOrder(orderId: string){
    return {
      ...this.orders.find(order =>{
        return order.id === orderId
      })
    }
  }

  addOrder(nombre_titular: string, monto: number, imageURL: string, comments: string){
    this.orders.push({
      nombre_titular,
      monto,
      imageURL,
      comments: [comments],
      id: this.orders.length + 1 + ""
    });
  }

  deleteOrder(orderId: string){
    this.orders = this.orders.filter(order => {
      return order.id !== orderId
    })
  }

  saldoActual(){

    let param = new HttpParams().set('id', "1");
    let url = "http://localhost:5000/api/monedero/Consultar";
    
    this.http.get(url, {params: param})
    .toPromise()
    .then((data : any) => {

    })

    return this.http.get(url, {params: param});
  }
}
