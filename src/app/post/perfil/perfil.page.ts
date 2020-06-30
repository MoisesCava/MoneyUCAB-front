import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from "../../models/usuario.model";
import { EstadoCivil } from 'src/app/models/estadoCivil.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any;

  estadoCiviles: EstadoCivil[] = [];

  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
  razonsocial: string;

  /**
   * 
   * data.persona.nombre;
        this.usuario.apellido = data.persona.apellido;
        this.usuario.telefono = data.result.telefono;
        this.usuario.direccion = data.result.direccion;
        this.usuario.razonSocial = data.comercio.razonSocial;
        this.usuario.idEstadoCivil = data.estadoCivil.idEstadoCivil;
   * 
   */

  constructor(private usuarioService : UsuariosService, 
    public toastController : ToastController, 
    private loadingController: LoadingController,
    private router: Router) { }

  ngOnInit() {

    this.usuarioService.estadosCiviles().subscribe(
      (data:any) =>{
        this.estadoCiviles = data;
      }
    );

    this.usuarioService.getDatosUsuario().subscribe(
      (data: any) => {

        localStorage.setItem('name', data.persona.nombre);
        localStorage.setItem('apellido', data.persona.apellido);
        localStorage.setItem('telefono', data.result.telefono);
        localStorage.setItem('direccion', data.result.direccion);
        localStorage.setItem('razonsocial', data.comercio.razonSocial);

        this.nombre = localStorage.getItem('name');
        this.apellido = localStorage.getItem('apellido');
        this.telefono = localStorage.getItem('telefono');
        this.direccion = localStorage.getItem('direccion');
        this.razonsocial = localStorage.getItem('razonsocial');
        
      }
    );

  }

  ionViewWillEnter(){

  }

  async presentToast(color : string, mensaje : string) {
    const toast = await this.toastController.create({
      message: mensaje,
      color : color,
      buttons: [ 
        {
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    toast.present();
  }
  
  async successToast(color : string, mensaje : string) {
    const success = await this.toastController.create({
      message: mensaje,
      color : color,
      buttons: [ 
        {
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    success.present();
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: "bubbles",
      duration: 100000,
      message: 'Cargando ...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
    });
    loading.present();
  }

  async onSubmit(){
    await this.presentLoading();
    this.usuarioService.modificarUsaurio().subscribe(
      (res:any) => {
        this.loadingController.dismiss();

        this.successToast('success', 'Datos modificados satisfactioamente')

        this.router.navigateByUrl('/post');
      },
      err => {
        this.loadingController.dismiss();
        this.presentToast('danger', 'Ha ocurrido un error al enviar el formulario');
      }
    );
  }

}
