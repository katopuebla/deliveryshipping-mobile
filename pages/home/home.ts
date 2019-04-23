import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SegundaComponent } from '../segunda/segunda.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goPagina2(){
    console.log('goPagina2');
    this.navCtrl.push(SegundaComponent);
  }

  goLogin(){
    console.log('goLogin');
    this.navCtrl.push(LoginComponent);
  }

}
