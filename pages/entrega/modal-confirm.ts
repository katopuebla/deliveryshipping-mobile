import { Component } from '@angular/core';
import { NavController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-confirm',
  templateUrl: 'modal-confirm.html'
})
export class ModalConfirm {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController) { }

dismiss() {
    this.viewCtrl.dismiss();
  }
}
