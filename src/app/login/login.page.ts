import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuariosService } from '../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formModel = {
    Email : '',
    Password : ''
  }

  constructor(private usuario: UsuariosService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.usuario.iniciarSesion(form.value).subscribe(
      (res:any) => {
        console.log(res); // res JSON
        localStorage.setItem('token', res.token)
        this.router.navigateByUrl('/post');
        console.log("token", res.token);
      },
      err => {
        console.log(err); // error JSON
      }
    );
  }

}
