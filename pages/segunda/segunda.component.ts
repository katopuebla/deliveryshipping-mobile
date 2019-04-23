import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'app-segunda',
  templateUrl: './segunda.component.html',
  styleUrls: ['./segunda.component.css']
})
export class SegundaComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack(){
    this.navCtrl.pop();
  }
}