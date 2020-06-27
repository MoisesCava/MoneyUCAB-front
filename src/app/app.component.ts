import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  navigate : any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Historial de Cobros",
        url   : "/cobros",
        icon  : "list-outline"
      },
      {
        title : "Aprobar reintegros",
        url   : "/aprobar-reintegro",
        icon  : "reload-outline"
      },
      {
        title : "Solicitar pago",
        url   : "/solicitar-pago",
        icon  : "cash-outline"
      },
      {
        title : "Cierre de caja",
        url   : "/cierre",
        icon  : "bar-chart-outline"
      },
      {
        title : "Perfil",
        url   : "/perfil",
        icon  : "person-outline"
      },
    ]
  }
}
