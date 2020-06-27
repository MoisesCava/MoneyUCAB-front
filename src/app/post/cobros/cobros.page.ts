import { Component, OnInit } from '@angular/core';
import { CobroActivo } from "../../models/cobroActivo.model";
import { CobroService } from 'src/app/servicios/utilidades/cobro/cobro.service';
import { AlertController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-cobros',
  templateUrl: './cobros.page.html',
  styleUrls: ['./cobros.page.scss'],
})
export class CobrosPage implements OnInit {

  cobrosActivos: CobroActivo[] = [];

  constructor(private cobroservice: CobroService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.cobroservice.cobrosActivos().subscribe(
      (data: any) =>{
        this.cobrosActivos = data;
      }
    );
  }

  ionViewWillEnter(){
    this.cobroservice.cobrosActivos().subscribe(
      (data: any) =>{
        this.cobrosActivos = data;
      }
    );
  }

  

  async onClick(idPago){
    const alert = await this.alertController.create({
      header: 'Cancelar',
      message: '¿Desea cancelar este cobro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.cobroservice.cancelarCobro(idPago)
            .subscribe(
              (data: any) =>
              {
                console.log(data);
              },
              err =>{
                console.log(err);
              }
            );
            this.router.navigate(['/cobros']);
          }
        }
      ]
    });
    await alert.present();
  }

}
