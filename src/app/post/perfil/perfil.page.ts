import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../interfaces/usuario.model";
import { ToastController } from '@ionic/angular';
import { UsuariosService } from '../../servicios/usuarios.service'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario : Usuario;

  constructor(private usuarioservice : UsuariosService, public toastController : ToastController) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.usuario = this.usuarioservice.getAtributtes();
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


  guardar(){
    if((this.usuario.apellido !== '') && (this.usuario.nombre !== '') && (this.usuario.correo !== '')){
      this.usuarioservice.setAtributtes(this.usuario);
      this.presentToast('success','Los cambios se han guardado correctamente');
    }
    else{
      this.presentToast('warning','No puede dejar los valores en blanco.');
    }
  }
}
