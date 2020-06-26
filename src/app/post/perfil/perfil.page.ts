import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from "../../models/usuario.model";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private usuarioService : UsuariosService, 
    public toastController : ToastController, 
    private loadingController: LoadingController,
    private router: Router) { }

    formModel = {
      usuario: '',
      email : '',
      telefono : '',
      direccion: '',
      idUsuario: 0
    }


    /*
    this.id = data;
        this.formModel.idUsuario = this.id.idUsuario;
        console.log(this.formModel.idUsuario);
    */

  ngOnInit() {

    this.usuarioService.formModel.reset();
    this.formModel.usuario = localStorage.getItem('usuario');
    this.formModel.email = localStorage.getItem('email');
    this.formModel.telefono = localStorage.getItem('telefono');
    this.formModel.direccion = localStorage.getItem('direccion');
    console.log(localStorage.getItem('usuario'));
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('telefono'));
    console.log(localStorage.getItem('direccion'));
  }

  ionViewWillEnter(){
    this.usuarioService.formModel.reset();
    this.formModel.usuario = localStorage.getItem('usuario');
    this.formModel.email = localStorage.getItem('email');
    this.formModel.telefono = localStorage.getItem('telefono');
    this.formModel.direccion = localStorage.getItem('direccion');
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
