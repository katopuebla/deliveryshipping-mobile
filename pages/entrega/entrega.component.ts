import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from 'ionic-angular';
//import { ModalConfirm } from './modal-confirm';
import { Envio } from '../../app/dto/envio';
import { EnviosService } from '../../app/service/envios.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.css']
})
export class EntregaComponent implements OnInit {

  guia: number;
  nombre: string;
  direccion: string;
  recibe: string;
  identificacion: number;

  envios: Envio[];

  constructor(
    // public modalCtrl: ModalController,
    private service: EnviosService
    , private alertCtrl: AlertController
    ) { }

  ngOnInit() {
    this.envios = this.service.getListGuia();
  }

  // presentModal() {
  //   const modal = this.modalCtrl.create(ModalConfirm);
  //   modal.present();
  // }

  selected(event: any) {
    console.log('changeSelect' );
    if (this.envios) {
      console.log('changeSelect 2 ' + envio);
      var envio = this.envios.find(x => x.guia == event);
      console.log('envio ' + envio);
      if (envio) {
        console.log('consig ' + envio.guia);
        console.log('consig ' + envio.consignatario.nombre);
        this.guia = envio.guia;
        this.nombre = envio.consignatario.nombre;
        this.direccion = envio.consignatario.direccion;
      }
    }
  }

  saveReceive(frmRecord) {
    console.log('saveReceive');
    var delGuia = this.guia;
    console.log('delGuia ' + this.guia);
    console.log('recibe ' + frmRecord.recibe);
    if (frmRecord.recibe && frmRecord.identificacion) {
      var index = this.envios.findIndex(x => x.guia == this.guia);
      console.log('index '+index);
      if (index > -1) {
        console.log('splice '+index);
        this.envios.splice(index, 1);
        this.nombre = '';
        this.direccion = '';
        this.recibe = '';
        this.identificacion = null;
        this.showAlertSuccess();
      }
    }else{
      this.showAlertError();
    }
  }

  showAlertSuccess() {
    const alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'guia confirmada '+this.guia,
      buttons: ['OK']
    });
    alert.present();
  }

  showAlertError() {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Algunos campos no han sido llenados ',
      buttons: ['OK']
    });
    alert.present();
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
        console.log('Barcode data', barcodeData);
      }).catch(err => {
        console.log('Error', err);
      });
  }

}